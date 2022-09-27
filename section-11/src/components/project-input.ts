import { Component } from "./base-component";
import { Validatable, validate } from "../util/validation";
import { autobind } from "../decorators/autobind";
import { projectState } from "../state/project-state";

//* import * as Validate from "../util/validation.js";
//* Validate.Validatable
//* import { autobind as Autobind } from "../decorators/autobind.js";

//* ProjectInput class
export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
    //* HTML has diferent elements even here.
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        super('project-input', 'app', true, 'user-input');
        //* Different input from the form element
        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;        
        this.configure();
    }

    renderContent() {}

    private gatherUserInput(): [string, string, number] | undefined {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;

        const titleValidatable: Validatable = {
            value: enteredTitle,
            required: true
        };
        const descriptionValidatable: Validatable = {
            value: enteredDescription,
            required: true,
            minLength: 5
        };
        const peopleValidatable: Validatable = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 5
        };

        if (
            !validate(titleValidatable) ||
            !validate(descriptionValidatable) ||
            !validate(peopleValidatable)
        ) {
            alert('Invalid input, please try again.');
            return;
        } else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }
    }

    private clearInputs() {
        this.titleInputElement.value= '';
        this.descriptionInputElement.value= '';
        this.peopleInputElement.value= '';
    }

    @autobind
    private submitHandler(event: Event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            //console.log(title, desc, people);
            projectState.addProject(title, desc, people);
            this.clearInputs();
        }
    }

    configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }
}
