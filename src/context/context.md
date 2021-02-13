# context

useContext는 helpers가 없을 경우 state를 리턴하고,
helpers가 있을 경우 {state, helpers}를 리턴한다.

```js
const state = useContext()
const {state, helpers} = useContext()
```

## global context

### AuthContext

```js
const {state, helpers} = useAuthContext()
```
유저 인증 상태를 나타내는 context

**state** 
  - boolean (onState)
**helpers**
  - setOn
  - setOff

### MQContext

```js
const {isOnlyXs, isOnverSm , ...} = useMQContext()
```
미디어 크기 상태를 나타내는 context

**state**
  - isOnlyXs
  - isOverSm
  - ...