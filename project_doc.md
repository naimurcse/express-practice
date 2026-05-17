Chapter One:
Express দিয়ে একটি server initialized করা।
// Express Install
Server run করতে script লিখতে হবে। Script এর জন্য প্যাকেজ দরকার ---> npm i -D tsx <-- Dev Dependence হিসাবে install করবো।

Server run করার জন্য একটি Script লিখেবো --->
package.json >> "dev" : "tsx watch ./src/server.ts"
watch <---- কোন ফাইল পরিবর্তন হচ্ছে কি না chack করবে। তারপর server এর directory কোথায় তা বলে দিবো।

"dev": "tsx watch ./src/server.ts", <--- এটি run করতে চাইলে ---> npm i -D tsx <--- install করতে হবে।
