<!-- Project Comments Go Here -->

Ideally would add loading state as well to indicate to a user that we are retrieving information

Ideally I would add a type of ApplicationUser
And use it in applicants state and SingleApplication component

```ts
interface ApplicationUser {}
```

Ideally the base URL would be configured in .env or similar file

Depending on how API is coded, I would ensure that the data is sorted to prevent duplicates

The fetchApplications could be in a different file as a function that allows you to pass page and limit

Ideally I would handle the status 503 and attempt to retry after timeout

Ideally I would handle the edge cases like: no applicants found and when user loaded everything(I would hide the button)

Ideally I would add tests
