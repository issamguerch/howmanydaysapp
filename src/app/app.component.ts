import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'How Many Days app';
  date1NotValide = "-First Date was not VALIDE ";
  date2NotValide = "-Seconde Date was not VALIDE";
  date1 : Date;
  date2 : Date;
  result : String ;
  message : String;

onChange(){

	//Le nombre de millisecondes en une journée

	var ONE_DAY = 1000 * 60 * 60 * 24

	//creation des objet date
	var date11 = new Date(this.date1);
	var date22 = new Date(this.date2);

	//vider le message d'erreur et le resultat a chaque appel de cette fonction
	this.message = "";
	this.result = "";

	//tester si la premiere date est valide,si la date n'est pas valide alors : enchaîner un message d'erreur
	if (isNaN(date11.getTime())) {
		
		this.message += this.date1NotValide;	
	}


	//tester si la deuxieme date est valide,si la date n'est pas valide alors : enchaîner un message d'erreur
	if (isNaN(date22.getTime())) {

			this.message += this.date2NotValide;
	}
		

	//Calculez combien de millisecondes entre 2 dates
	var diff = Math.abs(date11.getTime()-date22.getTime());

	//Calculer combien de jours en millisecondes calculé
	this.result = Math.round(diff/ONE_DAY).toString();



//afficher le resultat selon le nombre de jours

	switch(this.result) { 
   case "1": { 
      this.result = "One Day it's easy -_- give me something hard!";
      break; 
   } 
   case "0": { 
      this.result = "you have selected the same day !"
      break; 
   } 
   default: { 
      this.result += " Days between " + date11.toLocaleDateString() + " and " + date22.toLocaleDateString() ;
      break; 
   } 
} 
	//vider les dates pour une nouvelle calculation
		this.date1 = null;
		this.date2 = null;
	}
}

