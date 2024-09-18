"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[615],{85671:e=>{e.exports=JSON.parse('{"functions":[{"name":"isState","desc":"Checks if an object is a Flux state","params":[{"name":"object","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"boolean\\n"}],"function_type":"static","source":{"line":68,"path":"MainModule/Flux.luau"}},{"name":"peek","desc":"Gets the current value of a Flux state or returns the input if it\'s not a state","params":[{"name":"object","desc":"","lua_type":"T"}],"returns":[{"desc":"","lua_type":"T\\n"}],"function_type":"static","source":{"line":74,"path":"MainModule/Flux.luau"}},{"name":"peekVariadic","desc":"Gets the current values of multiple Flux states or non-state inputs","params":[{"name":"...","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"...any\\n"}],"function_type":"static","source":{"line":80,"path":"MainModule/Flux.luau"}},{"name":"_addDependency","desc":"Adds a dependency to the current state","params":[{"name":"dependency","desc":"","lua_type":"State<T>"}],"returns":[],"function_type":"method","source":{"line":193,"path":"MainModule/Flux.luau"}},{"name":"_removeDependency","desc":"Removes a dependency from the current state","params":[{"name":"dependency","desc":"","lua_type":"State<T>"}],"returns":[],"function_type":"method","source":{"line":202,"path":"MainModule/Flux.luau"}},{"name":"_update","desc":"Updates the state and propagates changes to dependents","params":[{"name":"noTween","desc":"","lua_type":"boolean?"}],"returns":[],"function_type":"method","source":{"line":216,"path":"MainModule/Flux.luau"}},{"name":"Destroy","desc":"Destroys the state, clearing all dependencies and bindings","params":[],"returns":[],"function_type":"method","source":{"line":263,"path":"MainModule/Flux.luau"}},{"name":"hook","desc":"Adds a hook callback function to be called when the state changes","params":[{"name":"callback","desc":"","lua_type":"Function"}],"returns":[{"desc":"","lua_type":"Function\\n"}],"function_type":"method","source":{"line":285,"path":"MainModule/Flux.luau"}},{"name":"get","desc":"Gets the current value of the state","params":[],"returns":[{"desc":"","lua_type":"any\\n"}],"function_type":"method","source":{"line":296,"path":"MainModule/Flux.luau"}},{"name":"set","desc":"Sets a new value for the state and triggers an update","params":[{"name":"new","desc":"","lua_type":"T"},{"name":"forceUpdate","desc":"","lua_type":"boolean?"},{"name":"noTween","desc":"","lua_type":"boolean?"}],"returns":[{"desc":"","lua_type":"State<T>\\n"}],"function_type":"method","source":{"line":301,"path":"MainModule/Flux.luau"}},{"name":"bindToProperty","desc":"Binds the state to a property of an Instance","params":[{"name":"instance","desc":"","lua_type":"Instance"},{"name":"property","desc":"","lua_type":"string"}],"returns":[],"function_type":"method","source":{"line":312,"path":"MainModule/Flux.luau"}},{"name":"bindToAttribute","desc":"Binds the state to an attribute of an Instance","params":[{"name":"instance","desc":"","lua_type":"Instance"},{"name":"attribute","desc":"","lua_type":"string"}],"returns":[],"function_type":"method","source":{"line":329,"path":"MainModule/Flux.luau"}},{"name":"edit","desc":"Edits an existing Instance with Flux state bindings and other properties","params":[{"name":"instance","desc":"","lua_type":"Instance"},{"name":"definition","desc":"","lua_type":"SpecialDefinition & Instance"}],"returns":[{"desc":"","lua_type":"Instance\\n"}],"function_type":"static","source":{"line":393,"path":"MainModule/Flux.luau"}},{"name":"new","desc":"Creates a new Instance with Flux state bindings and other properties","params":[{"name":"className","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Flux.edit"}],"function_type":"static","source":{"line":496,"path":"MainModule/Flux.luau"}},{"name":"computeFrom","desc":"Creates a computed state based on other states or static values","params":[{"name":"computation","desc":"","lua_type":"(...any) -> T"},{"name":"...","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"State<T>\\n"}],"function_type":"static","source":{"line":503,"path":"MainModule/Flux.luau"}},{"name":"compute","desc":"Creates a computed state, passing a use function to access and bind other states","params":[{"name":"computation","desc":"","lua_type":"(use: <U>(U | State<U>) -> U?) -> T"}],"returns":[{"desc":"","lua_type":"State<T>\\n"}],"function_type":"static","source":{"line":517,"path":"MainModule/Flux.luau"}},{"name":"tween","desc":"Applies TweenService tweens with Instance properties bound to the Flux state","params":[{"name":"tweenInfo","desc":"","lua_type":"Stateful<TweenInfo>"},{"name":"state","desc":"","lua_type":"State<T>"}],"returns":[{"desc":"","lua_type":"State<T>\\n"}],"function_type":"static","source":{"line":532,"path":"MainModule/Flux.luau"}},{"name":"state","desc":"Creates a new Flux state with an initial value","params":[{"name":"initialValue","desc":"","lua_type":"T | State<T> | Instance"},{"name":"property","desc":"","lua_type":"string?"}],"returns":[{"desc":"","lua_type":"State<T>\\n"}],"function_type":"static","source":{"line":541,"path":"MainModule/Flux.luau"}}],"properties":[{"name":"Scope","desc":"A scope object for organizing and cleaning up Flux states","lua_type":"Scope","source":{"line":172,"path":"MainModule/Flux.luau"}},{"name":"Attribute","desc":"A marker for defining Instance attributes in [Flux.edit]","lua_type":"SpecialKey","readonly":true,"source":{"line":178,"path":"MainModule/Flux.luau"}},{"name":"Children","desc":"A marker for defining Instance children in [Flux.edit]","lua_type":"SpecialKey","readonly":true,"source":{"line":184,"path":"MainModule/Flux.luau"}},{"name":"Event","desc":"Markers for defining events in [Flux.edit]","lua_type":"SpecialKey & { Attribute = SpecialKey, Property = SpecialKey }","readonly":true,"source":{"line":190,"path":"MainModule/Flux.luau"}}],"types":[{"name":"Function","desc":"A generic function type","lua_type":"(...any) -> ...any","source":{"line":4,"path":"MainModule/Flux.luau"}},{"name":"List","desc":"A generic list type","lua_type":"{ T }","source":{"line":9,"path":"MainModule/Flux.luau"}},{"name":"Set","desc":"A generic set type implemented as a table with boolean values","lua_type":"{ [T]: boolean }","source":{"line":14,"path":"MainModule/Flux.luau"}},{"name":"Dict","desc":"Represents a dictionary-like table with keys of type `T` and values of any type.","lua_type":"{ [T]: any }","source":{"line":19,"path":"MainModule/Flux.luau"}},{"name":"State","desc":"Represents a reactive state object in the Flux system","lua_type":"{ _update: (State<T>) -> boolean, _dependencies: Set<State<T>>, _dependents: Set<State<T>>, _binds: { [T]: any, _cleanup: List<any> }, _hooks: Dict<Function>, _value: T, _stateful: boolean, _operation: List<any>?, _tweenInfo: TweenInfo | any, set: (self: State<T>, new: T, force: boolean?, noTween: boolean?) -> State<T>, get: (self: State<T>) -> T, hook: (self: State<T>, callback: Function) -> Function, Destroy: (self: State<T>) -> (), bindToProperty: (self: State<T>, instance: Instanceproperty: string) -> (), bindToAttribute: (self: State<T>, instance: Instance, attribute: string) -> () }","source":{"line":26,"path":"MainModule/Flux.luau"}},{"name":"Stateful<T>","desc":"A type for state or raw values","lua_type":"T | State<T>","source":{"line":47,"path":"MainModule/Flux.luau"}},{"name":"SpecialKey","desc":"A type for state or raw values","lua_type":"{ type: \\"SpecialKey\\" }","source":{"line":52,"path":"MainModule/Flux.luau"}},{"name":"SpecialDefinition","desc":"Represents the definition used in [Flux.new] and [Flux.edit]","lua_type":"{ [number | string | SpecialKey]: unknown }","source":{"line":59,"path":"MainModule/Flux.luau"}},{"name":"Scope","desc":"","lua_type":"{[any] = Scope | any}","source":{"line":155,"path":"MainModule/Flux.luau"}}],"name":"Flux","desc":"A library for easily creating and managing reactive state.","source":{"line":132,"path":"MainModule/Flux.luau"}}')}}]);