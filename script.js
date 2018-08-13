// using for loop to count till 100//
for( var i = 1; i <= 100 ; i++)
{   // modulus operator check if its a multiple of both 3 and 5
	if(( i % 3 == 0) && (i % 5 == 0))
	{
	  console.log(i + "FizzBuzz");
	  continue;
	}
	// modulus operator check if its a multiple of 5
	 if( i % 5 == 0)
	{
	  console.log(i + "Buzz");
	  continue;
	}
	// modulus operator check if its a multiple of 3
	 if (i % 3 == 0)
	{
	  console.log(i + "Fizz");
	  continue;
	}
	else {
		console.log(i);
	}	
}
