<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [ngx-query-state](./ngx-query-state.md) &gt; [QueryStateConfig](./ngx-query-state.querystateconfig.md) &gt; [retryCondition](./ngx-query-state.querystateconfig.retrycondition.md)

## QueryStateConfig.retryCondition property

Decide when to retry a failed query. Defaults to 3 times.

<b>Signature:</b>

```typescript
retryCondition?: number | ((retries: number) => boolean);
```