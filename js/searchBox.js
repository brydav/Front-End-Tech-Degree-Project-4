new List('list-id', {
  plugins: [ ListPagination(), NameOfOtherPlugin(options) ]
});

var options = {
  valueNames: [
    { name: 'keyword', attr: 'data-keyword' },
    { name: 'description', attr: 'alt' }
  ]
};
var portWrapper = new List('port_wrapper', options);
