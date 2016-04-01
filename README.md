# angular2-phantomjs

##Run the project
1. `npm install`
2. `jspm install --yes`
3. `gulp serve`

App is now running on port 3000.

##Reproduce the issue

On a different terminal, run `node horse.js`

You can see the following error:  

````
[[Error message] Potentially unhandled rejection [2] defineProperty@[native code]
	defineProperty
	canPatchViaPropertyDescriptor
	propertyDescriptorPatch
	
	
	__webpack_require__
	
	
	
	eval code
	eval@[native code]
	W@http://localhost:3000/jspm_packages/system.js:4:40570
	execute@http://localhost:3000/jspm_packages/system.js:5:28838
	u@http://localhost:3000/jspm_packages/system.js:5:7837
	r@http://localhost:3000/jspm_packages/system.js:5:6387
	execute@http://localhost:3000/jspm_packages/system.js:5:11458
	y@http://localhost:3000/jspm_packages/system.js:4:21990
	w@http://localhost:3000/jspm_packages/system.js:4:22363
	p@http://localhost:3000/jspm_packages/system.js:4:20241
	h@http://localhost:3000/jspm_packages/system.js:4:20626
	http://localhost:3000/jspm_packages/system.js:4:27580
	Evaluating http://localhost:3000/jspm_packages/npm/angular2@2.0.0-beta.13/bundles/angular2-polyfills.js
	Error loading http://localhost:3000/src/index.js
[Error trace] [ { file: 'http://localhost:3000/jspm_packages/system-polyfills.js',
    line: 4,
    function: '' } ]
````