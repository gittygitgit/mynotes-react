
Used to generate React tree nodes


JSX may contain pure HTML.

Compiler knows to convert html into React.createElement calls





Javascript
JSX may contain javascript

Javascript may be included by embracing in braces.

Allows rendering of text or React components into the tree

Named attributes passed to a component are accessible via this.props.

Nested properties (props of child components) may be accessed via this.props.children

Attributes to an element are included in this.props.

Text content of jsx xml syntax is registered in this.props.children


Terms / Concepts
Tree node
Really just a JSON object which is used by the React frame.
Allows you to create js objects using html-like syntax
An alternative to writing React.createElement


