## Simple Angular NoteBook application

- Built using [Angular 12+](https://angular.io/)
- Packages & libraries used: [Bootstrap 4](https://getbootstrap.com/docs/4.6/getting-started/introduction/), [Angular Material](https://material.angular.io/), [fortawesome](https://fortawesome.com/), [Ngrx](https://ngrx.io/), [Ngrx persist](https://www.npmjs.com/package/ngrx-store-localstorage)

## Requirements
- Notebook should have up to 5 pages
- Starting on page 1, the user can enter text into the page
- The user should be able to navigate to each of the 5 pages and enter text onto each page
- If the user refreshes the browser page, the text should persist
- If the user opens a new tab with the web app in it, the new notebook should behave like a separate notebook with its own pages/text

## Development

### Environment setup
Install Angular cli
- `npm install -g @angular/cli`

You can still use [Angular CLI](https://angular.io/cli) to create any angular component, services and etc.

### Run
- On the root directory of the project, run this command to install dependencies: 
`npm install`
- Run:
`ng serve`