


const reactElement = {
    type: 'a',
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    children: "Welcome to google"
}

function customRender(element, container){
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;
    domElement.setAttribute('href', element.props.href);
    domElement.setAttribute('target', element.props.target);
    container.appendChild(domElement);
}
const root = document.querySelector("#root");

customRender(reactElement, root);