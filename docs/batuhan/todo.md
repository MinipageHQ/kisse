- if we have clerk session and no blitz session
- run ssoWithClerk

  - search for clerkId,
    - if user not found, run a sync job and await, grant session
    - if user found, queue a sync job, grant session
  - grant session

- if we have blitz session and no clerk session

  - logout

- if we have blitz session and a clerk session but the userids don't match
  - run ssoWithClerk with force: true
