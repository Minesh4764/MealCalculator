var taxPercantage = 10; //DC Tax
var tipPercentage = 15; // regular rate




var Diner = function(name, dishes) {
	this.name = name;
	this.dishes = dishes;
	this.tax = 0;
	this.GrossBill = 0; //before tax
};



var Dish = function(name, price) {
	this.name = name;
	this.price = price;
};




var Lasagna = new Dish('Lasagna', 7.50);
var Pizza = new Dish('Pizza', 14.99);
var Cookies = new Dish('Cookies', 5.00);


var Minesh = new Diner('Minesh', [Lasagna, Pizza,]);
var Rakesh = new Diner('Rakesh', [Lasagna, Pizza, Cookies]);



function CalPerc(TotalBill, percentage){
	return TotalBill*(percentage/100);
}


function dinerDetail(diner){
	console.log('Total before tax: $' + diner.GrossBill.toFixed(2));
	console.log('Tax: $' + diner.tax.toFixed(2));
	console.log('Total with tax: $' + (diner.GrossBill + diner.tax).toFixed(2));
	var TipAmount = (diner.GrossBill * .15);
	console.log('Tip Amount:$ ' + TipAmount.toFixed(2)); 
    //console.log('Total with Tax & Tip: $ ' +  (diner.GrossBill + TipAmount).toFixed(2));
   console.log('Total with Tax & Tip: $' + (diner.GrossBill + TipAmount).toFixed(2));	
	console.log();
}


// calc tip abd bill summary
function billDetail(totalcost) {
	//console.log();
	total_tip = CalPerc(totalcost, tipPercentage);
	console.log('Total before tip: $' + totalcost.toFixed(2));
	console.log('Tip percentage: $' + tipPercentage + '%');
	console.log('Tip amount: $' + total_tip.toFixed(2));
	console.log('Total: $' + (totalcost + total_tip).toFixed(2));	
}


// Calculate the bill for all  diners
function BillCalculate(diners) {
	var TotalBill = 0;
	//while

	for(i=0; i< diners.length; i++){
	 console.log(diners[i].name + ':');
	 for(j=0; j<diners[i].dishes.length; j++){
	 console.log(diners[i].dishes[j].name + ': $' + diners[i].dishes[j].price.toFixed(2));
	 diners[i].GrossBill += diners[i].dishes[j].price;
	 diners[i].tax += diners[i].dishes[j].price * (taxPercantage/100);
		}
	  TotalBill += diners[i].GrossBill + diners[i].tax;
	 dinerDetail(diners[i]);
	}
	billDetail(TotalBill);
}

BillCalculate([Minesh,Rakesh]);