
# Target/Purpose

- Understanding `useState`, `useMemo` and `useCallback` hooks
- Understanding of basic JS-core functionality asynchronous and callstack
- Basic TypeScript understanding
- Basic knowledge of Git version control management.

# Task

Design a stopwatch 24-hours with 6-digits, and 2 buttons `Start/Stop` and `Reset`
	
In the beginning, the clock should display `00:00:00` and the buttons should have `Start` and `Reset` buttons.

When user click on `Start` button the clock will start to count and the `Start` button should change to `Stop` button and the clock will auto increase on next unit at its end.
For example 
- Next of `00:00:59` should be `00:01:00` 
- Next of `00:59:00` should be `01:00:00` 
- Next of `23:59:59` should be `00:00:00`

When user click on `Stop` button the clock will stop at where it is and the `Stop` button should change to `Start` button, when user click on `Start` it will resume counting.

When user click on `Reset` at any point, the clock should stop counting and return to `00:00:00`.

Submit your repository at https://github.com/thinh-trt/StopWatch

# Expecting
- UI design is a plus but it is not a purpose of this test, so no need to take too much time on it.
- Implementation and understanding of React lifecycle and React hooks.
- We take the git commit message convention very serious. (Look on the Appendix)
- Try document your work (Setup, Requirement, Running,...) on README.MD
- You need to setup from scratch, the Appendix may help you with some documents.
- Keep things simple and stable.

## Appendix

[React Typescript](https://create-react-app.dev/docs/adding-typescript/)

[ES6](http://es6-features.org/)

[React Hooks](https://reactjs.org/docs/hooks-intro.html)

[Typescript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

[Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/#specification)
	
