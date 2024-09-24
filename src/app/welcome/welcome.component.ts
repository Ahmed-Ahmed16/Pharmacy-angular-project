import { Component } from "@angular/core";
import { Router } from "@angular/router"; //1
import { RouterModule } from "@angular/router";

@Component({
    standalone:true,
    selector:'welcome-root',
    templateUrl:'./welcome.component.html',
    styleUrls:["./welcome.component.css"],
    imports:[RouterModule]
})

export class welcomecomponent{
    title = 'project'
    constructor(private router: Router) { } //2
}
//3
// goToCreateAccount() {
//     this.router.navigate(['/creat']);
//   }


// // TypeScript code for redirection
// function redirectToTestPage(): void {
//     window.location.href = "test.html";
// }

// // Add event listener to the button
// const startButton = document.getElementById('startButton');
// if (startButton) {
//     startButton.addEventListener('click', redirectToTestPage);
// }
