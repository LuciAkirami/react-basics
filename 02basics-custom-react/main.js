// This is how react works in a nutshell

function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

// react takes in a reactElement
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

// we create a root where the html needs to be injected
const mainContainer = document.querySelector('#root')

// then the react renders those reactelments, i.e. converts them
// into html and injects them inside the root / mainContainer
customRender(reactElement, mainContainer)

// so basically react takes in the elements and adds them to the container