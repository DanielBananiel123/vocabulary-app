function createElement(ty) {
    return new ElementBuilder(ty);
}

class ElementBuilder {
    constructor(ty) {
        this._el = document.createElement(ty);
    }

    with_class(...classes) {
        this._el.classList.add(...classes);
        return this;
    }

    with_id(id) {
        this._el.id = id;
        return this;
    }

    with_children(...children) {
        this._el.append(...children);
        return this;
    }

    with_inner_html(html) {
        this._el.innerHTML = html;
        return this;
    }
    
    with_styles(style) {
        this._el.style = style;
        return this;
    }

    with_href(href) {
        this._el.href = href;
        return this;
    }

    with_type(type) {
        this._el.type = type;
        return this;
    }

    with_hidden(hidden) {
        this._el.hidden = hidden;
        return this;
    }

    with_accept(accept) {
        this._el.accept = accept;
        return this;
    }

    insert(elementID) {
        document.getElementById(elementID).append(this._el)
        return this;
    }

    

    finish() {
        return this._el;
    }
}