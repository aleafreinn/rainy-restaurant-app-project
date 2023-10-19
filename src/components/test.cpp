#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<time.h>

void flightticket();
void addon();
void food();
void luggage();
void sport();
void bill();
void foodprice();
void busticket();
void ticketbus();
void billbus();
void date();
void etsticket();
void confirmets();
void billets();
float harga,total1,total2,total3,totalfood,totalluggage,totalsport,flightpayment;
float pricebus,etsprice;
int month,day;
int main()
{
int nom;


printf("\t\t\tWelcome to e-Ticket\n");
printf("\t\t\t-------------------\n");
printf("\n\t1.Flight ticket\n");
printf("\t2.Bus ticket\n");
printf("\t3.Ets ticket\n");
printf("\t4.Exit");
printf("\n\n\nEnter your choice>>");
scanf("%d",&nom);//pilihan utk e-ticket
system("cls");

if(nom==1)
flightticket();
else if(nom==2)
busticket();
else if(nom==3)
etsticket();

return 0;
}
void flightticket()
{

void classflight();
char dari,ke;

printf("\t\t\tDomestic flight\n");
printf("*Info->All price for domestic flight is same.");
printf(" \n(Economy-RM150,Business-RM250,First-RM450)\n");
printf("\n\nK-KUALA LUMPUR\t\tJ-JOHOR BAHRU\t\tC-KOTA KINABALU\n");
printf("\nD-KOTA BHARU\t\tL-LANGKAWI\t\tH-KUCHING\n");
printf("\nP-PENANG\n");
printf("\nPlease Select Your Departure>> ");
scanf(" %c",&dari);//dari mana nak naik

printf("\n\nK-KUALA LUMPUR\t\tJ-JOHOR BAHRU\t\tC-KOTA KINABALU\n");
printf("\nD-KOTA BHARU\t\tL-LANGKAWI\t\tH-KUCHING\n");
printf("\nP-PENANG\n");
printf("\nPlease Select Your Destination>> ");
scanf(" %c",&ke);//Destinasi

if ((dari=='K' || dari=='k') && (ke=='K' || ke=='k'))
{
	 printf("\n\t\tERROR!!\n");
	 printf(" Check your departure and destination.\n\n\n");
	 flightticket();
}
else if ((dari=='J' || dari=='j') && (ke=='J' || ke=='j'))
{
	 printf("\n\t\tERROR!!\n");
	 printf(" Check your departure and destination.\n\n\n");
	flightticket();
}
else if ((dari=='C' || dari=='c') && (ke=='C' || ke=='c'))
{
	 printf("\n\t\tERROR!!\n");
	 printf(" Check your departure and destination.\n\n\n");
	flightticket();
}
else if ((dari=='D' || dari=='d') && (ke=='D' || ke=='d'))
{
	 printf("\n\t\tERROR!!\n");
	 printf(" Check your departure and destination.\n\n\n");
	flightticket();
}
else if ((dari=='L' || dari=='l') && (ke=='L' || ke=='l'))
{
	 printf("\n\t\tERROR!!\n");
	 printf(" Check your departure and destination.\n\n\n");
	flightticket();
}
else if ((dari=='H' || dari=='h') && (ke=='H' || ke=='h'))
{
	 printf("\n\t\tERROR!!\n");
	 printf(" Check your departure and destination.\n\n\n");
	flightticket();
}
else if ((dari=='P' || dari=='p') && (ke=='P' || ke=='p'))
{
	 printf("\n\t\tERROR!!\n");
	 printf(" Check your departure and destination.\n\n\n");
	flightticket();
}
else if (((dari=='K' || dari=='k') && (ke=='C' || ke=='c')) || ((dari=='C'||dari=='c')&&(ke=='K'||ke=='k')))
{
	classflight();
}
else if (((dari=='K' || dari=='k') && (ke=='J' || ke=='j')) || ((dari=='J'||dari=='j')&&(ke=='K'||ke=='k')))
{
	classflight();
}
else if (((dari=='K' || dari=='k') && (ke=='D' || ke=='d')) || ((dari=='D'||dari=='d')&&(ke=='K'||ke=='k')))
{
	classflight();
}
else if (((dari=='K' || dari=='k') && (ke=='L' || ke=='l')) || ((dari=='L'||dari=='l')&&(ke=='K'||ke=='k')))
{
	classflight();
}
else if (((dari=='K' || dari=='k') && (ke=='H' || ke=='h')) || ((dari=='H'||dari=='h')&&(ke=='K'||ke=='k')))
{
	classflight();
}
else if (((dari=='K' || dari=='k') && (ke=='p' || ke=='P')) || ((dari=='P'||dari=='p')&&(ke=='K'||ke=='k')))
{
	classflight();
}
else if (((dari=='J' || dari=='j') && (ke=='C' || ke=='c')) || ((dari=='c'||dari=='C')&&(ke=='J'||ke=='j')))
{
	classflight();
}
else if (((dari=='J' || dari=='j') && (ke=='D' || ke=='d')) || ((dari=='D'||dari=='d')&&(ke=='J'||ke=='j')))
{
	classflight();
}
else if (((dari=='J' || dari=='j') && (ke=='L' || ke=='l')) || ((dari=='L'||dari=='l')&&(ke=='J'||ke=='j')))
{
	classflight();
}
else if (((dari=='J' || dari=='j') && (ke=='H' || ke=='h')) || ((dari=='H'||dari=='h')&&(ke=='J'||ke=='j')))
{
	classflight();
}
else if (((dari=='J' || dari=='j') && (ke=='P' || ke=='p')) || ((dari=='P'||dari=='p')&&(ke=='J'||ke=='j')))
{
	classflight();
}
else if (((dari=='C' || dari=='c') && (ke=='D' || ke=='d')) || ((dari=='D'||dari=='d')&&(ke=='C'||ke=='c')))
{
	classflight();
}
else if (((dari=='C' || dari=='c') && (ke=='L' || ke=='l')) || ((dari=='L'||dari=='l')&&(ke=='C'||ke=='c')))
{
	classflight();
}
else if (((dari=='C' || dari=='c') && (ke=='H' || ke=='h')) || ((dari=='H'||dari=='h')&&(ke=='C'||ke=='c')))
{
	classflight();
}
else if (((dari=='C' || dari=='c') && (ke=='P' || ke=='p')) || ((dari=='P'||dari=='p')&&(ke=='C'||ke=='c')))
{
	classflight();
}
else if (((dari=='D' || dari=='d') && (ke=='l' || ke=='L')) || ((dari=='L'||dari=='l')&&(ke=='D'||ke=='d')))
{
	classflight();
}
else if (((dari=='D' || dari=='d') && (ke=='h' || ke=='H')) || ((dari=='H'||dari=='h')&&(ke=='D'||ke=='d')))
{
	classflight();
}
else if (((dari=='D' || dari=='d') && (ke=='p' || ke=='P')) || ((dari=='P'||dari=='p')&&(ke=='D'||ke=='d')))
{
	classflight();
}
else if (((dari=='L' || dari=='l') && (ke=='H' || ke=='h')) || ((dari=='H'||dari=='h')&&(ke=='L'||ke=='l')))
{
	classflight();
}
else if (((dari=='L' || dari=='l') && (ke=='P' || ke=='p')) || ((dari=='P'||dari=='p')&&(ke=='L'||ke=='l')))
{
	classflight();
}
else if (((dari=='H' || dari=='h') && (ke=='P' || ke=='p')) || ((dari=='P'||dari=='p')&&(ke=='H'||ke=='h')))
{
	classflight();
}
else
{
	printf("\n\t\t\tINVALID INPUT\n\n\n");
	flightticket();
}

}//end flightticket



void classflight()
{

int kelas,seat,children,adult,confirmation,x;
    system("cls");
    date();
	printf("\n\nWhich class do you want?\n");
	printf("1.Economy class\n");
	printf("2.Business class\n");
	printf("3.First class\n");
	printf(">>");
	scanf(" %d",&kelas);	
	
	if (kelas==1)
	{
	printf("\n\nHow many seats do you want>>");
	scanf("%d",&seat);
	printf("Children:");
	scanf("%d",&children);
	printf("Adult:");
	scanf("%d",&adult);
	x=children+adult;
	if(x==seat)
	harga=seat*150;
	else if(x!=seat)
	{
	printf("INVALID INPUT\n");
	printf("Please try again.\n\n");
	sleep(2);
	classflight();
	}

    printf("The total price for your seat is RM %.2f",harga);
	printf("\n\nDo you want to confirm your booking?");
	printf("\n1.Yes   2.No");
	printf("\n>>");
	scanf("%d",&confirmation);
	if(confirmation==1)
	{
	printf("Your seat is confirmed");
	sleep(2);
	system("cls");
	addon();
	}	
	else if(confirmation==2)
	{
	system("cls");
	main();
	}
	else
	{
	printf("INVALID INPUT\n");
	printf("Please try again.\n\n");
	sleep(2);
	flightticket();
	}
	
	}
	else if (kelas==2)
	{
	printf("\n\nHow many seats do you want>>");
	scanf("%d",&seat);
	printf("Children:");
	scanf("%d",&children);
	printf("Adult:");
	scanf("%d",&adult);
	x=children+adult;
	if(x==seat)
	harga=seat*250;
	else if(x!=seat)
	{
		printf("INVALID INPUT\n");
	printf("Please try again.\n\n");
	sleep(2);
		classflight();	
	}

	
    printf("The total price for your seat is RM %.2f",harga);	
    printf("\n\nDo you want to confirm your booking?");
	printf("\n1.Yes   2.No");
	printf("\n>>");
	scanf("%d",&confirmation);
	if(confirmation==1)
	{
	printf("Your seat is confirmed");
	sleep(2);
	system("cls");
	addon();
	}	
	else if(confirmation==2)
	{
	system("cls");
	main();
	}
	else
	{
	printf("INVALID INPUT\n");
	printf("Please try again.\n\n");
	sleep(2);
	flightticket();
	}
	}
	else if (kelas==3)
	{
	printf("\n\nHow many seats do you want>>");
	scanf("%d",&seat);
	printf("Children:");
	scanf("%d",&children);
	printf("Adult:");
	scanf("%d",&adult);
	x=children+adult;
	if(x==seat)
	harga=seat*450;
	else if(x!=seat)
	{
	printf("INVALID INPUT\n");
	printf("Please try again.\n\n");
	sleep(2);
	classflight();
	}
	

    printf("The total price for your seat is RM %.2f",harga);	
    printf("\n\nDo you want to confirm your booking?");
	printf("\n1.Yes   2.No");
	printf("\n>>");
	scanf("%d",&confirmation);
	if(confirmation==1)
	{
	printf("Your seat is confirmed");
	sleep(2);
	system("cls");
	addon();
	}	
	else if(confirmation==2)
	{
	system("cls");
	main();
	}
	else
	{
	flightticket();
	}
	}
	else
	{
	printf("INVALID INPUT\n");
	printf("Please try again.\n\n");
	sleep(2);
	classflight();
	}
}//end of classflight

void addon()
{
	int pilihan,b;
	
	printf("ADD-ON\n");
	printf("1.Food & Drinks");
	printf("\n2.Weight of luggage");
	printf("\n3.Sport equipments");
	printf("\n4.Skip");
	printf("\n>>");
	scanf("%d",&pilihan);
	if(pilihan==1)
   {
   	 food();
   	 printf("\nDo you want to add another add-on?");
   	 printf("\n1.Yes   2.No");
   	 printf("\n>>");
   	 scanf("%d",&b);
   	 if (b==1)
   	 {
   	 addon();	
	 }
	 else if(b==2)
	 {
	 bill();
	 }
   	 
   }
   else if(pilihan==2)
   {
   	 luggage();
   	printf("\nDo you want to add another add-on?");
   	 printf("\n1.Yes   2.No");
   	 printf("\n>>");
   	 scanf("%d",&b);
   	 if (b==1)
   	 {
   	 addon();	
	 }
	 else if(b==2)
	 {
	 bill();
	 }
   	 
   }
   else if(pilihan==3)
   {
   	sport();
    printf("\nDo you want to add another add-on?");
   	 printf("\n1.Yes   2.No");
   	 printf("\n>>");
   	 scanf("%d",&b);
   	 if (b==1)
   	 {
   	 addon();	
	 }
	 else if(b==2)
	 {
	 bill();
	 }
   }
   else if(pilihan==4)
   {
   	bill();
   }
   else
   {
   	printf("INVALID INPUT\n");
	printf("Please try again.\n\n");
	sleep(2);
	addon();
   }
}//end addon

void food()
{
	int makanan,quantity,tambah;

	printf("\nFood and drink menu.");	
	printf("\n1.Nasi lemak with tea         (RM15.00 each)");
	printf("\n2.Mee goreng with milo        (RM20.00 each)");
	printf("\n3.Chicken chop with latte     (RM35.00 each)");
	printf("\nEnter your choice>>");
	scanf("%d",&makanan);
	if(makanan==1)
	{
		printf("Enter quantity: ");
   		scanf("%d",&quantity);
   		total1=(quantity*15.00);
  		printf("RM%.2f",total1);
  		printf("\nDo you want to add more food?");
  		printf("\n1.Yes  2.No");
  		printf("\n>>");
  		scanf("%d",&tambah);
  		if(tambah==1)
  		{
  			food();
		}
		else if(tambah==2)
		{
			foodprice();
		}
	}//end makanan 1
	else if(makanan==2)
	{
		printf("Enter quantity: ");
   		scanf("%d",&quantity);
   		total2=(quantity*20.00);
  		printf("RM%.2f",total2);
  		printf("\nDo you want to add more food?");
  		printf("\n1.Yes  2.No");
  		printf("\n>>");
  		scanf("%d",&tambah);
  		if(tambah==1)
  		{
  			food();
		}
		else if(tambah==2)
		{
			foodprice();
		}
	}//end makanan 2
	else if(makanan==3)
	{
		printf("Enter quantity: ");
   		scanf("%d",&quantity);
   		total3=(quantity*35.00);
  		printf("RM%.2f",total3);
  		printf("\nDo you want to add more food?");
  		printf("\n1.Yes  2.No");
  		printf("\n>>");
  		scanf("%d",&tambah);
  		if(tambah==1)
  		{
  			food();
		}
		else if(tambah==2)
		{
			foodprice();
		}
	}
}//end food

void foodprice()
{
	totalfood=total1+total2+total3;
	printf("Your price for food & drink is %.2f",totalfood);
} 

void luggage()
{
	int kilogram;
	printf("You get 20kg weight of luggage for free. ");
	printf("\nFor adding weight of luggage, RM20 will be charged per kilogram.");
	printf("\nHow many kilograms do you want to add?");
	printf("\n>>");
	scanf("%d",&kilogram);
	totalluggage=kilogram*20;
	printf("Your total price for luggage is %.2f",totalluggage);
}

void sport()
{
	int equipment;
	printf("For sport equipments, RM150 will be charged per complete set equipment.");
	printf("\nHow many equipments?");
	printf(">>");
	scanf("%d",&equipment);
	totalsport=equipment*150;
	printf("Your total price for equipment is %.2f",totalsport);
}

void bill()
{
	flightpayment=totalfood+totalsport+totalluggage+harga;
	printf("===============================================");
	printf("\n\t\tINVOICE");
	printf("\nDEPARTURE DATE: %d/%d/2018                ",day,month);
	printf("\nPRICE FOR TICKET:RM%.2f",harga);
	printf("\nPRICE FOR FOOD:RM%.2f",totalfood);
	printf("\nPRICE FOR LUGGAGE:RM%.2f",totalluggage);
	printf("\nPRICE FOR SPORT EQUIPMENT:RM%.2f",totalsport);
	printf("\nTOTAL PRICE FOR FLIGHT TICKET is RM%.2f",flightpayment);
	printf("\nBooking Time :");
            	time_t mytime;
            	mytime=time(NULL);
            	printf(ctime(&mytime)); 
	printf("\n===============================================");

	sleep(6);
	system("cls");
	main();
}

void busticket()
{
	char ke;
	int seat;
	printf("\n\t\tBUS TICKET\n");
    printf("All buses will departure from TERMINAL BERSEPADU SELATAN(TBS)");
    printf("\n\n");
    printf("DESTINATION                                        PRICE(RM)");
    printf("\n  A-ARAU(PER)                                        50.00");
    printf("\n  B-SG. PETANI(KED)                                  45.00");
    printf("\n  C-IPOH(PRK)                                        43.00");
    printf("\n  D-BUTTERWORTH(PEN)                                 40.00");
    printf("\n  E-KOTA BHARU(KEL)                                  60.00");
    printf("\n  F-BESUT(TER)                                       55.00");
    printf("\n  G-KUANTAN(PAH)                                     35.00");
    printf("\n  H-MUAR(JOH)                                        50.00");
    printf("\n  I-AYER KEROH(MEL)                                  30.00");
    printf("\n  J-REMBAU(N9 )                                      25.00");
    printf("\nPlease Select Your Destination>> ");
    scanf(" %c",&ke);
    if(ke=='A' || ke=='a')
    {
    	printf("\nHow many seat do you want?");
    	printf("\n>>");
    	scanf("%d",&seat);
    	date();
    	pricebus=seat*50;
    	printf("Total price is RM%.2f",pricebus);
    	ticketbus();
	}
    else  if(ke=='B' || ke=='b')
    {
    	printf("\nHow many seat do you want?");
    	printf("\n>>");
    	scanf("%d",&seat);
    	date();
    	pricebus=seat*45;
    	printf("Total price is RM%.2f",pricebus);
    	ticketbus();
	}
	else  if(ke=='C' || ke=='c')
    {
    	printf("\nHow many seat do you want?");
    	printf("\n>>");
    	scanf("%d",&seat);
    	date();
    	pricebus=seat*43;
    	printf("Total price is RM%.2f",pricebus);
    	ticketbus();
	}
	else  if(ke=='D' || ke=='d')
    {
    	printf("\nHow many seat do you want?");
    	printf("\n>>");
    	scanf("%d",&seat);
    	date();
    	pricebus=seat*40;
    	printf("Total price is RM%.2f",pricebus);
    	ticketbus();
	}
	else  if(ke=='E' || ke=='e')
    {
    	printf("\nHow many seat do you want?");
    	printf("\n>>");
    	scanf("%d",&seat);
    	date();
    	pricebus=seat*60;
    	printf("Total price is RM%.2f",pricebus);
    	ticketbus();
	}
	else  if(ke=='F' || ke=='f')
    {
    	printf("\nHow many seat do you want?");
    	printf("\n>>");
    	scanf("%d",&seat);
    	date();
    	pricebus=seat*55;
    	printf("Total price is RM%.2f",pricebus);
    	ticketbus();
	}
	else  if(ke=='G' || ke=='g')
    {
    	printf("\nHow many seat do you want?");
    	printf("\n>>");
    	scanf("%d",&seat);
    	date();
    	pricebus=seat*35;
    	printf("Total price is RM%.2f",pricebus);
    	ticketbus();
	}
	else  if(ke=='H' || ke=='h')
    {
    	printf("\nHow many seat do you want?");
    	printf("\n>>");
    	scanf("%d",&seat);
    	date();
    	pricebus=seat*50;
    	printf("Total price is RM%.2f",pricebus);
    	ticketbus();
	}
	else  if(ke=='I' || ke=='j')
    {
    	printf("\nHow many seat do you want?");
    	printf("\n>>");
    	scanf("%d",&seat);
    	date();
    	pricebus=seat*30;
    	printf("Total price is RM%.2f",pricebus);
    	ticketbus();
	}
	else  if(ke=='J' || ke=='j')
    {
    	printf("\nHow many seat do you want?");
    	printf("\n>>");
    	scanf("%d",&seat);
    	date();
    	pricebus=seat*25;
    	printf("Total price is RM%.2f",pricebus);
    	ticketbus();
	}
    else
	{
		printf("\n\t\tINVALID INPUT\n");
		printf("\t\tPlease try again.\n\n\n");
		busticket();
	}


}//end of busticket

void ticketbus()
{
 int pilih;
 printf("\nDo you want to confirm your ticket?");
 printf("\n1.Yes      2.No");
 printf("\n>>");
 scanf("%d",&pilih);
 if(pilih==1)
 {
 	printf("Your seat is confirmed.");
 	billbus();
 }
 else if(pilih==2)
 {
 	system("cls");
 	main();
 }
 else
 {
 	printf("\n\t\tINVALID INPUT\n\n");
 	ticketbus();
 }
}//end of ticketbus

void billbus()
{
 printf("\n============================================");
 printf("\n\t\tINVOICE");
printf("\nDEPARTURE DATE: %d/%d/2018                ",day,month);
 printf("\nTOTAL PRICE FOR BUS TICKET IS RM%.2f",pricebus);
 printf("\nBooking Time :");
            	time_t mytime;
            	mytime=time(NULL);
            	printf(ctime(&mytime));
 printf("\n============================================");
 sleep(6);
 system("cls");
 main();
}

void date()
{
		
	printf("\nPlease Enter Date\n");
	printf("Month: ");
	scanf("%d",&month);
	if (month==2)
	{
	printf("Day: ");
	scanf("%d",&day);
	if (day<=0 || day>=29)
	{	
		printf("\t\tINVALID INPUT\n\n");
		date();
	}
	}
	else if (month==1||month==3||month==5||month==7||month==8||month==10||month==12)
	{
	printf("Day: ");
	scanf("%d",&day);
		if (day<=0 || day>=32)
		{
			printf("\t\tINVALID INPUT\n\n");
			date();
		}
	}
	else if (month==4||month==6||month==9||month==11)
	{
	printf("Day: ");
	scanf("%d",&day);
		if (day<=0 || day>=31)
		{
			printf("\t\tINVALID INPUT\n\n");
			date();
		}
		
	}
	else
	{
		printf("\t\tINVALID INPUT\n\n");
	    date();
	}
}//end of date

void etsticket()
{
	int ke,children,adult,kelas;
	
	printf("\n\t\tETS TICKET\n");
    printf("All train will departure from KUALA LUMPUR SENTRAL");
    printf("\n\n");
    printf("DESTINATION                                          PRICE(RM)\n");
    printf("                                              CHILD         ADULT");
    printf("\n  1-PADANG BESAR                              44.00         80.00");
    printf("\n  2-ALOR SETAR                                41.00         73.00");
    printf("\n  3-GURUN                                     37.00         66.00");
    printf("\n  4-PARIT BUNTAR                              32.00         55.00");
    printf("\n  5-TAIPING                                   28.00         47.00");
    printf("\n  6-KUALA KANGSAR                             26.00         44.00");
    printf("\n  7-TANJUNG MALIM                             14.00         20.00");
    printf("\n  8-TAMPIN                                    14.00         2O.00");
    printf("\n  9-BATANG MELAKA                             19.00         30.00");
    printf("\n  10-GEMAS                                    25.00         50.00");
    printf("\nPlease Select Your Destination>> ");
    scanf("%d",&ke);	
    
     if(ke==1)
    {
    	printf("\n\nHow many children?");
    	printf("\n>>");
    	scanf("%d",&children);
    	printf("How many adult?");
    	printf("\n>>");
    	scanf("%d",&adult); 
    	date();
    	printf("\nWhich class do you want?");
    	printf("\n1.Economy");
    	printf("\n2.GOLD(add RM10 per person)");
    	printf("\n3.PLATINUM(add RM20 per person)");
    	printf("\n>>");
    	scanf("%d",&kelas);
    	if(kelas==1)
    	{
    	etsprice=(44*children)+(80*adult);
    	confirmets();
		}
		else if(kelas==2)
		{
		etsprice=(44*children)+(80*adult)+((children+adult)*10);
		confirmets();
		}
		else if(kelas==3)
		{
		etsprice=(44*children)+(80*adult)+((children+adult)*20);
		confirmets();
		}
    	else
    	{
    	printf("\nINVALID INPUT");
    	printf("\nPlease try again");
    	etsticket();
		}		
	}
	else if(ke==2)
    {
    	printf("\n\nHow many children?");
    	printf("\n>>");
    	scanf("%d",&children);
    	printf("How many adult?");
    	printf("\n>>");
    	scanf("%d",&adult); 
    	date();
    	printf("\nWhich class do you want?");
    	printf("\n1.Economy");
    	printf("\n2.GOLD(add RM10 per person)");
    	printf("\n3.PLATINUM(add RM20 per person)");
    	printf("\n>>");
    	scanf("%d",&kelas);
    	if(kelas==1)
    	{
    	etsprice=(41*children)+(73*adult);
    	confirmets();
		}
		else if(kelas==2)
		{
		etsprice=(41*children)+(73*adult)+((children+adult)*10);
		confirmets();
		}
		else if(kelas==3)
		{
		etsprice=(41*children)+(73*adult)+((children+adult)*20);
		confirmets();
		}
    	else
    	{
    	printf("\nINVALID INPUT");
    	printf("\nPlease try again");
    	etsticket();
		}		
	}
	else if(ke==3)
    {
    	printf("\n\nHow many children?");
    	printf("\n>>");
    	scanf("%d",&children);
    	printf("How many adult?");
    	printf("\n>>");
    	scanf("%d",&adult); 
    	date();
    	printf("\nWhich class do you want?");
    	printf("\n1.Economy");
    	printf("\n2.GOLD(add RM10 per person)");
    	printf("\n3.PLATINUM(add RM20 per person)");
    	printf("\n>>");
    	scanf("%d",&kelas);
    	if(kelas==1)
    	{
    	etsprice=(37*children)+(66*adult);
    	confirmets();
		}
		else if(kelas==2)
		{
		etsprice=(37*children)+(66*adult)+((children+adult)*10);
		confirmets();
		}
		else if(kelas==3)
		{
		etsprice=(37*children)+(66*adult)+((children+adult)*20);
		confirmets();
		}
    	else
    	{
    	printf("\nINVALID INPUT");
    	printf("\nPlease try again");
    	etsticket();
		}		
	}
	else if(ke==4)
    {
    	printf("\n\nHow many children?");
    	printf("\n>>");
    	scanf("%d",&children);
    	printf("How many adult?");
    	printf("\n>>");
    	scanf("%d",&adult); 
    	date();
    	printf("\nWhich class do you want?");
    	printf("\n1.Economy");
    	printf("\n2.GOLD(add RM10 per person)");
    	printf("\n3.PLATINUM(add RM20 per person)");
    	printf("\n>>");
    	scanf("%d",&kelas);
    	if(kelas==1)
    	{
    	etsprice=(32*children)+(55*adult);
    	confirmets();
		}
		else if(kelas==2)
		{
		etsprice=(32*children)+(55*adult)+((children+adult)*10);
		confirmets();
		}
		else if(kelas==3)
		{
		etsprice=(32*children)+(55*adult)+((children+adult)*20);
		confirmets();
		}
    	else
    	{
    	printf("\nINVALID INPUT");
    	printf("\nPlease try again");
    	etsticket();
		}		
	}
	else if(ke==5)
    {
    	printf("\n\nHow many children?");
    	printf("\n>>");
    	scanf("%d",&children);
    	printf("How many adult?");
    	printf("\n>>");
    	scanf("%d",&adult); 
    	date();
    	printf("\nWhich class do you want?");
    	printf("\n1.Economy");
    	printf("\n2.GOLD(add RM10 per person)");
    	printf("\n3.PLATINUM(add RM20 per person)");
    	printf("\n>>");
    	scanf("%d",&kelas);
    	if(kelas==1)
    	{
    	etsprice=(28*children)+(47*adult);
    	confirmets();
		}
		else if(kelas==2)
		{
		etsprice=(28*children)+(47*adult)+((children+adult)*10);
		confirmets();
		}
		else if(kelas==3)
		{
		etsprice=(28*children)+(47*adult)+((children+adult)*20);
		confirmets();
		}
    	else
    	{
    	printf("\nINVALID INPUT");
    	printf("\nPlease try again");
    	etsticket();
		}		
	}
	else if(ke==6)
    {
    	printf("\n\nHow many children?");
    	printf("\n>>");
    	scanf("%d",&children);
    	printf("How many adult?");
    	printf("\n>>");
    	scanf("%d",&adult); 
    	date();
    	printf("\nWhich class do you want?");
    	printf("\n1.Economy");
    	printf("\n2.GOLD(add RM10 per person)");
    	printf("\n3.PLATINUM(add RM20 per person)");
    	printf("\n>>");
    	scanf("%d",&kelas);
    	if(kelas==1)
    	{
    	etsprice=(26*children)+(44*adult);
    	confirmets();
		}
		else if(kelas==2)
		{
		etsprice=(26*children)+(44*adult)+((children+adult)*10);
		confirmets();
		}
		else if(kelas==3)
		{
		etsprice=(26*children)+(44*adult)+((children+adult)*20);
		confirmets();
		}
    	else
    	{
    	printf("\nINVALID INPUT");
    	printf("\nPlease try again");
    	etsticket();
		}		
	}
	else if(ke==7 || ke==8)
    {
    	printf("\n\nHow many children?");
    	printf("\n>>");
    	scanf("%d",&children);
    	printf("How many adult?");
    	printf("\n>>");
    	scanf("%d",&adult); 
    	date();
    	printf("\nWhich class do you want?");
    	printf("\n1.Economy");
    	printf("\n2.GOLD(add RM10 per person)");
    	printf("\n3.PLATINUM(add RM20 per person)");
    	printf("\n>>");
    	scanf("%d",&kelas);
    	if(kelas==1)
    	{
    	etsprice=(14*children)+(20*adult);
    	confirmets();
		}
		else if(kelas==2)
		{
		etsprice=(14*children)+(20*adult)+((children+adult)*10);
		confirmets();
		}
		else if(kelas==3)
		{
		etsprice=(14*children)+(20*adult)+((children+adult)*20);
		confirmets();
		}
    	else
    	{
    	printf("\nINVALID INPUT");
    	printf("\nPlease try again");
    	etsticket();
		}		
	}
   else if(ke==9)
    {
    	printf("\n\nHow many children?");
    	printf("\n>>");
    	scanf("%d",&children);
    	printf("How many adult?");
    	printf("\n>>");
    	scanf("%d",&adult); 
    	date();
    	printf("\nWhich class do you want?");
    	printf("\n1.Economy");
    	printf("\n2.GOLD(add RM10 per person)");
    	printf("\n3.PLATINUM(add RM20 per person)");
    	printf("\n>>");
    	scanf("%d",&kelas);
    	if(kelas==1)
    	{
    	etsprice=(19*children)+(30*adult);
    	confirmets();
		}
		else if(kelas==2)
		{
		etsprice=(19*children)+(30*adult)+((children+adult)*10);
		confirmets();
		}
		else if(kelas==3)
		{
		etsprice=(19*children)+(30*adult)+((children+adult)*20);
		confirmets();
		}
    	else
    	{
    	printf("\nINVALID INPUT");
    	printf("\nPlease try again");
    	etsticket();
		}		
	}
	else if(ke==10)
    {
    	printf("\n\nHow many children?");
    	printf("\n>>");
    	scanf("%d",&children);
    	printf("How many adult?");
    	printf("\n>>");
    	scanf("%d",&adult); 
    	date();
    	printf("\nWhich class do you want?");
    	printf("\n1.Economy");
    	printf("\n2.GOLD(add RM10 per person)");
    	printf("\n3.PLATINUM(add RM20 per person)");
    	printf("\n>>");
    	scanf("%d",&kelas);
    	if(kelas==1)
    	{
    	etsprice=(25*children)+(50*adult);
    	confirmets();
		}
		else if(kelas==2)
		{
		etsprice=(25*children)+(50*adult)+((children+adult)*10);
		confirmets();
		}
		else if(kelas==3)
		{
		etsprice=(25*children)+(50*adult)+((children+adult)*20);
		confirmets();
		}
    	else
    	{
    	printf("\nINVALID INPUT");
    	printf("\nPlease try again");
    	etsticket();
		}		
	}
	else
	{
		printf("\nINVALID INPUT");
    	printf("\nPlease try again");
    	sleep(3);
    	etsticket();
	}
}// end of trainticket

void confirmets()
{

 int pilih;
 printf("\nDo you want to confirm your ticket?");
 printf("\n1.Yes      2.No");
 printf("\n>>");
 scanf("%d",&pilih);
 if(pilih==1)
 {
 	printf("Your seat is confirmed.");
 	billets();
 }
 else if(pilih==2)
 {
 	system("cls");
 	main();
 }
 else
 {
 	printf("\n\t\tINVALID INPUT\n");
 	printf("Please try again\n\n");
 	confirmets();
 }
}//end confirmets

void billets()
{
 printf("\n============================================");
 printf("\n\t\tINVOICE");
printf("\nDEPARTURE DATE: %d/%d/2018                ",day,month);
 printf("\nTOTAL PRICE FOR ETS TICKET IS RM%.2f",etsprice);
 printf("\nBooking Time :");
            	time_t mytime;
            	mytime=time(NULL);
            	printf(ctime(&mytime));
 printf("\n============================================");
 sleep(6);
 system("cls");
 main();
}