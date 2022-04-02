import {
  distinctUntilChanged,
  filter,
  fromEvent,
  mapTo,
  materialize,
  merge,
  MonoTypeOperatorFunction,
  NEVER,
  Observable,
  startWith,
  switchMap,
  takeUntil,
  tap,
  timer,
} from 'rxjs';
import { TriggerConfig } from '../contracts';

/**
 * Re-emit the last emitted value
 */
export function echo<Data>({
  timerTrigger = 60_000,
  focusTrigger = true,
  onlineTrigger = true,
  triggers = (): never[] => [],
}: TriggerConfig = {}): MonoTypeOperatorFunction<Data> {
  return (source): Observable<Data> => {
    const triggers$ = [
      focusTrigger ? fromEvent(window, 'focus') : NEVER,
      onlineTrigger ? fromEvent(window, 'online') : NEVER,
    ];
    return source.pipe(
      distinctByJson(),
      switchMap((value) => {
        return merge(...triggers$, ...triggers(value)).pipe(
          startWith(value),
          timerTrigger === false
            ? tap()
            : switchMap(() => {
                return timer(0, timerTrigger);
              }),
          mapTo(value),
          takeUntil(
            source.pipe(
              materialize(),
              filter(({ kind }) => kind !== 'N')
            )
          )
        );
      })
    );
  };
}

export function distinctByJson<Data>(): MonoTypeOperatorFunction<Data> {
  return distinctUntilChanged(
    (previous, current) =>
      previous === current ||
      JSON.stringify(previous) === JSON.stringify(current)
  );
}
