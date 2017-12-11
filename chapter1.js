/*

-Write a program to calculate the total price of your phone purchase. 
You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. 
You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.


-After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly
formatted.

-Finally, check the amount against your bank account balance to see if you can afford it or not.

-You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well
as a variable for your "bank account balance.""

-You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal
places.

-Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier.
You may prompt the user for their bank account balance, for example. Have fun and be creative!

OK, go ahead. Try it. Don't peek at my code listing until you've given it a shot yourself!

*/

var bank_balance;
var purchase=0;
var threshold;

const TAX_RATE = 0.08;
const ACCESSORY_PRICE = 10;
const PHONE_PRICE = 100;



function print_values(in_val)
{

	amount = "$" + String( in_val );
	console.log(amount);

}


 function main()
 {
 	    do{
 	    	var a=1;
 	    	var bl = prompt( "insert your bank balance " );
 			bank_balance = Number(bl);
 			var th = prompt( "insert your purchase threshold " );
 			threshold = Number(th);
 			if(threshold >= bank_balance)
 			{
 				a=0;
 				console.log("threshold must be less than equal than bank balance");
 			}
 	    }while(a==0);
 		
 		

 	while(true)
 	{		 	
 		var op =  prompt( "type: (1) if you want to buy a phone. (2) if you want buy an accessory. (3) pay " );
 		
 		if(op==1){
 			if(bank_balance >= (PHONE_PRICE + TAX_RATE) && purchase <= threshold){
 				bank_balance -=(PHONE_PRICE + TAX_RATE);
 				purchase += (PHONE_PRICE + TAX_RATE);
 				console.log("operation success");
 				console.log("your new balance is :");
 				print_values(bank_balance);


 			}else{
 				console.log("Your balance is insufficient to complete this operation or you reach the maximum purchase ");
 				console.log("your balance is :");
 				print_values(bank_balance);
 				console.log("your purchase is :");
 				print_values(purchase);
 			}
 			
 		}

 		if(op==2){
 			if(bank_balance >= (ACCESSORY_PRICE+TAX_RATE) && purchase <= threshold )
 			{
 				bank_balance -=(ACCESSORY_PRICE+TAX_RATE);
 				purchase += (ACCESSORY_PRICE+TAX_RATE);
 				console.log("operation success");
 				console.log("your new balance is :");
 				print_values(bank_balance);

 			}else{
 				console.log("Your balance is insufficient to complete this operation or you reach the maximum purchase ");
 				console.log("your balance is :");
 				print_values(bank_balance);
 				console.log("your purchase is :");
 				print_values(purchase);

 			}	
 		}

 		if(op==3){
 			console.log("Operation Completed ");
 			console.log("your balance is :");
 			print_values(bank_balance);
 			console.log("your purchase is :");
 			print_values(purchase);
 			break;
 		}

 	}
 }
