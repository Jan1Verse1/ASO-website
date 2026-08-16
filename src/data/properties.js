// Current property listings shown in the "For Sale & For Rent" section on the home page.
//
// To add a new listing: copy an object below, give it a unique `id`, and fill in the fields.
// To remove a listing: delete its object from the array.
// To mark something as sold/let: just delete it, or change `type` if it switches from one to the other.
//
// `image` must be imported at the top of this file from src/assets/images (or a subfolder there).
// Drop new photos into src/assets/images/properties/ and import them the same way.

import A10041 from '../assets/images/A10041.jpeg'
//import A10041 from '../assets/images/A10042.jpeg'
import IkateShop from '../assets/images/IkateShop.jpeg'

export const properties = [
  {
    id: 1,
    title: '2 bedroom to let at 1004',
    type: 'For Rent',
      // price: '₦8,500,000 / year',
    location: '1004, Lagos',
    image: A10041,
    summary: 'Spacious family home with BQ, private compound, and 24-hour estate security.',
  },
  {
    id: 2,
    title: 'Shop for Sale',
    type: 'For Sale',
    // price: '₦120,000,000',
    location: 'Suite K185, Road 5, Ikota Shopping Complex, by VGC, Lagos',
    image: IkateShop,
    summary: 'Fitted commercial space.',
  },
]
