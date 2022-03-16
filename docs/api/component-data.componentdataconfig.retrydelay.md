<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [component-data](./component-data.md) &gt; [ComponentDataConfig](./component-data.componentdataconfig.md) &gt; [retryDelay](./component-data.componentdataconfig.retrydelay.md)

## ComponentDataConfig.retryDelay property

Set the delay between the retries. Defaults to an exponential retry with a starting delay of 1 second.

<b>Signature:</b>

```typescript
retryDelay?: (retries: number) => number | Date;
```