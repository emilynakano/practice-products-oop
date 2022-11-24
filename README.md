<div align="center">

  #  :beer: :cup_with_straw:	Practice: Order & Items 🚬 📱	
  
</div>

<br>	
 
 ## :page_with_curl: Description
  
The purpose of this practice was the use of Object Oriented Programming concepts, with the use of classes, inheritance, abstraction, 
encapsulation and abstract class.

Classes
- `Item`
    - Has `category`, `mark` and `price`.
- `TaxItem`
    - This class is inherited from the item class.
    - Has a `calculateTax` method that returns the tax through a parameter containing the tax rate.
- `Order`
    - Has a list of `items`.
    - Has an `addItem` method that adds an `Item` to the list of `Items`.
    - Has a `getTotal` method that returns the sum of the `Items` prices.
    - Has a `getTaxes` method that returns the sum of the taxes of the items.
- categories classes
    - `Beer`
        - This class is inherited from the TaxItem class.
        - Has a `getTaxes` method that returns the tax rate of the item.
    - `Cigar`
        - This class is inherited from the TaxItem class.
        - Has a `getTaxes` method that returns the tax rate of the item.
    - `Electronics`
        - This class is inherited from the TaxItem class.
        - Has a `getTaxes` method that returns the tax rate of the item.
    - `Water`
        - This class is inherited from the item class.
