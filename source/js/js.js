var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    a: 'Something',
    rawHtml: '<div class="huh">sds</div>',
    isActive: true,
  	hasError: false
  },
  created: function () {
  	// created , when init'ing
    // `this` points to the vm instance
    console.log('a is: ' + this.a)
  },
  // for any complex logic, you should use a computed property.
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  },
  // for event handlers??
  methods: {
    toggleActive: function() {
      if (this.isActive) {
        this.isActive = false;
      } else {
        this.isActive = true;
      }
      
    }
  }  
});