This is a JS interview project to help you setup your environment.

Requirements:
* Mac OS X/Linux/Windows
* Node (tested with v14.6.0)
* Yarn (tested with v1.22.4)

Install the dependencies using Yarn
```bash
$ yarn install
```

Make sure that you are able to execute tests using Jest
```bash
$ yarn jest
```

It should output something like
```bash
 PASS  tests/models/Batman.test.js
  Batman
    ✓ has correct callout (2 ms)
    ✓ callout is not equal to wabba dub dup
    ✓ callout is not equal to null
    ✓ callout is not equal to Get into the Batmobile! (1 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        1.648 s
Ran all test suites.
✨  Done in 2.96s.

```

Then you should import the project into your IDE of choice to make sure you are able to add and execute new tests freely.
