//array is a collection of different data types that are mutable which is why it is a non-primitive datatype and each index is stored in memeory which is why it is constant time lookup
//different way to amke an array
const arr = Array();
const arr2 = [];
//can have different data types:
const arr3 = [
    'steve',
    250,
    true,
    {country: 'USA', city: 'Providence'},
    {skills: ['html','py','js','css','sql']}
];
//creating using split
let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',');
//creating an array with 8 empty columns and initial static value of null
let empty = Array(8).fill(null);
const joined = arr3.concat(companies);
//console.log(joined.indexOf('steve'));
console.log(typeof joined);//object type
//to check if someting is an array can use Array.isArray(arr)
//console.log(Array.isArray(joined));
let to_string = joined.toString();//converts the array into a string
let comp_string = companies.join(', ');
console.log(comp_string);
//slicing uses the slice(start, end) method not including the end
let first3 = companies.slice(3);
const numbers = [1,2,3,4,5,6];
numbers.splice(0,3,10,11,12);//removes first 3 items from index 0 and then replaces with the enxt
numbers.pop();//removes the last elemenet-- use pop for last element and splice to remove certain elemenets
numbers.shift();//removes the first elemenet but it is linear time because shifts everything over
numbers.unshift(100);//adds an element to the start of the array
console.log(numbers);
numbers.reverse();//reverses the array
numbers.sort((a,b)=>a-b);//sorts in ascening as u can see from call back function the smaller is first
console.log(numbers);
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort((a,b)=>a-b);
let minAge = ages[0], maxAge = ages[ages.length-1];
let median = ages[Math.floor((ages.length)/2)];
let avg = (arr) => {
    sum=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}
let first10 = ages.slice(0,3);
let changedFirst = ages.splice(0,1,200);//returns the removed element
const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]
let split = arr => {
    let midPoint = Math.floor(arr.length/2);
    let lower = arr.slice(0,midPoint);
    let upper = arr.slice(midPoint, arr.length);
    if(lower.length < upper.length){lower.push('Alaska')};
    return {lowerHalf: lower, upperHalf:upper};
}
console.log(split(countries));