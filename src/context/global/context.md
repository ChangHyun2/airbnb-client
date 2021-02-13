App 트리의 위치에 알맞게 폴더 작성

# global

전역으로 관리할 context

## AuthContext

```js

// provide auth context
<AuthContextProvider>
  <App />
</AuthContextProvider>

// in component
const auth = useAuthContext()

return auth.on ? <Login/> : <Logout/>

```

## MQContext

breakpoint (variable) => MQContext => Show (component) => usage 순으로 dependency를 갖는다.

```js

const Show = {
  onlySm: ({ children }) => useContext(MQContext)[isOnlySm] ? children : null,
  overSm: ({ children }) => useContext(MQContext)[isOverSm] ? children : null
};

export default Show;
```

```js

// provider MQ context
<MQContextProvider>
  <App/>
</MQContextProvider>

// use MQ context

const matched = useContext(MQContext)
```