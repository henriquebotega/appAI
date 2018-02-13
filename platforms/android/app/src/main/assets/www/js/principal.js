
function loadPrincipal() {
    ProgressSemicircle.rebind();
    ProgressCircle.rebind();

    setInterval(() => {
        updateValuesProgressSemicircle();
    }, 3000)

    setInterval(() => {
        updateValuesProgressCircle();
    }, 4000)
}

function updateValuesProgressSemicircle() {
    document.getElementById('progressMetricUser').progressSemicircle.update(Math.floor(Math.random() * 100) + 1);
}

function updateValuesProgressCircle() {
    document.getElementById('progressProfile').progressCircle.update(Math.floor(Math.random() * 100) + 1);
    document.getElementById('progressSteps').progressCircle.update(Math.floor(Math.random() * 100) + 1);
    document.getElementById('progressRunning').progressCircle.update(Math.floor(Math.random() * 100) + 1);
    document.getElementById('progressTasks').progressCircle.update(Math.floor(Math.random() * 100) + 1);
}
