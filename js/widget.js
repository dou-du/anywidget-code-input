import "./widget.css";
import { basicSetup, EditorView } from 'codemirror'
import { javascript } from '@codemirror/lang-javascript'

function render({ model, el }) {
	/* let btn = document.createElement("button");
	btn.classList.add("anywidget_code_input-counter-button");
	btn.innerHTML = `count is ${model.get("value")}`;
	btn.addEventListener("click", () => {
		model.set("value", model.get("value") + 1);
		model.save_changes();
	});
	model.on("change:value", () => {
		btn.innerHTML = `count is ${model.get("value")}`;
	});
	el.appendChild(btn); */

    let textarea = document.createElement("div");
    const initialText = 'console.log("hello, world!")'

    let cm = new EditorView({
        doc: initialText,
        extensions: [
            basicSetup,
            javascript(),
        ],
        parent: textarea,
    });

    model.set("value", initialText);
    model.save_changes();

	el.appendChild(textarea);
}

export default { render };
