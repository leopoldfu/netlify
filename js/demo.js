var app = new Vue({
  el: '#statusContainer',
  data: {
    threshold: 0.0,
    viewable: false,
    percentViewable: 0.0,
    focus: true,
    elementWidth: 0,
    elementHeight: 0,
    viewportWidth: 0,
    viewportHeight: 0,
    iframeContext: 'unknown',
    technique: 'unknown',
    criteriaMet: false,
    unmeasureable: false
  }
});

var openvv = new OpenVV(), element = document.getElementById('mainContainer');

var executor = openvv
  .measureElement(element)
  .onViewableStart(function(args) {
  })
  .onViewableStop(function(args) {
  })
  .onViewableChange(function(args){
    update(args);
    app.threshold = executor._strategy.criteria.inViewThreshold;

  })
  .onViewableComplete(function(args) {
    app.criteriaMet = true;

  })
  .onUnmeasureable(function() {
    app.unmeasureable = true;

  });

function update(details) {
  Object.keys(details).forEach(function(key) { app[key] = details[key]; });
}