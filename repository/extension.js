
(function(ext) {
	  var initvurs;
	  var training_input = [];
	  var training_output = [];
    import brain from 'brain.js-master';
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        initvurs={
          iterations: 20000, // the maximum times to iterate the training data
          errorThresh: 0.005, // the acceptable error percentage from training data
          log: false, // true to use console.log, when a function is supplied it is used
          logPeriod: 10, // iterations between logging out
          learningRate: 0.3, // multiply's against the input and the delta then adds to momentum
          momentum: 0.1, // multiply's against the specified "change" then adds to learning rate for change
          callback: null, // a periodic call back that can be triggered while training
          callbackPeriod: 10, // the number of iterations through the training data between callback calls
          timeout: Infinity, // the max number of milliseconds to train for
					inputSize: 20,
    			inputRange: 20,
    			hiddenSizes: [20,20],
    			outputSize: 20,
    			decayRate: 0.999
        };
        return {status: 2, msg: 'Ready'};
    };
    ext.init_vars = function(menu, n) {
      if( menu === 'iterations') { 
				initvurs.iterations=n;
			}
			if ( menu === 'errorThresh') {
				initvurs.errorThresh=n;
			} 
			if ( menu ===  'learningRate') {
				initvurs.lerningRate=n;
			} 
			if ( menu ===   'momentum') {
				initvurs.momentum=n;
			}
			if ( menu === 'callback') {
				initvurs.callback=n;
			}
			if ( menu ===  'callbackPeriod') {
					initvurs.callbackPeriod=n;
			}
			if ( menu ===  'timeout') {
				initvurs.timeout=n;
			}
			if ( menu ===  'inputSize') {
				initvurs.inputSize=n;
			}
			if ( menu ===  'inputRange') {
				initvurs.inputRange=n;
			}
			if ( menu ===  'hiddenSizes') {
				initvurs.hiddenSizes=n;
			} 
			if ( menu ===  'learningRate') { 
				initvurs.learningRate=n;
			}
			if ( menu ===  'decayRate') {
				initvurs.decayRate=n;
			}
    };
    ext.init = function() {
			const net = new brain.recurrent.RNN(initvurs);
    };
    ext.train = function() {
			var choo = [];
      for( var i  = 0; i < training_input.length(); i++) {
				choo.push({input:training_input[i], output:training_output[i]});
			}
			net.train(choo);
    };
		ext.train_var = function (input, output) {
			training_input.push(input);
			training_output.push(output);
		};
    ext.output = function(input) {
      return net.output(input);
    };
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
						[' ', 'Set %m.options to %n', 'init_vars', 'inputSize', '10'],
						[' ', 'Initialize the recurrent neural network', 'init'],
						[' ', 'When the net gets %s it should output %s', 'train_var', '', ''],
						[' ', 'Train the net', 'train'],
						['r', 'Output with input %s', 'output', ' ']
        ],
        menus: {
             options: ['iterations','errorThresh', 'learningRate',  'momentum','callback', 'callbackPeriod', 'timeout', 'inputSize', 'inputRange', 'hiddenSizes', 'learningRate', 'decayRate']
         }
    };

    // Register the extension
    ScratchExtensions.register('Neural network scratch framework lolol', descriptor, ext);
})({});
