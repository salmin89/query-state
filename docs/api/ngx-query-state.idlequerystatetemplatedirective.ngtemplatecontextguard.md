<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [ngx-query-state](./ngx-query-state.md) &gt; [IdleQueryStateTemplateDirective](./ngx-query-state.idlequerystatetemplatedirective.md) &gt; [ngTemplateContextGuard](./ngx-query-state.idlequerystatetemplatedirective.ngtemplatecontextguard.md)

## IdleQueryStateTemplateDirective.ngTemplateContextGuard() method

<b>Signature:</b>

```typescript
static ngTemplateContextGuard<T>(_dir: IdleQueryStateTemplateDirective<T>, ctx: unknown): ctx is {
        $implicit?: T;
        data?: T;
        revalidating: boolean;
        error?: unknown;
        retries?: number;
    };
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  \_dir | [IdleQueryStateTemplateDirective](./ngx-query-state.idlequerystatetemplatedirective.md)<!-- -->&lt;T&gt; |  |
|  ctx | unknown |  |

<b>Returns:</b>

ctx is { $implicit?: T; data?: T; revalidating: boolean; error?: unknown; retries?: number; }
