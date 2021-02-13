## useToggle

```js
const bulb = useToggle()

bulb.on
bulb.setOn
bulb.setOff
bulb.toggle
```

## useMQ

window.matchMedia를 이용해 원하는 query를 만족할 경우 true 반환
MQContext에서 query 일치 여부를 저장하고
Show component에서 context value 사용

```js
const isMaxWidth1000 = useMediaQuery('(max-width:1000px)')
```

## useDarkMode

useToggle => useDarkMode

on일 경우 body의 data-theme속성을 'dark'로 업데이트
off일 경우 theme 속성 제거해준다.

```js
// ex) DarkModeToggler.js

const {on, toggle} = useDarkMode('initial state')

return <>
  <p>`dark mode state is ${on}`</p>
  <button onClick={toggle}>toggle darkMode</button>
</>
```
