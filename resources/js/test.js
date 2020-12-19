// Wait for the page to load first
window.onload = function () {
  //Get a reference to the link on the page
  // with an id of "mylink"
  var a = document.getElementById('mobo');

  const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">sasas</h5>

                        <div>Author: asas</div>
                        <div>Publisher: sasas</div>
                        <div>Number Of Pages: sasas</div>

                        <hr>

                        <button type="button" class="btn btn-danger">Delete</button>
                      
                    </div>
                </div>
            </div>
        `;

  //Set code to run when the link is clicked
  // by assigning a function to "onclick"
  a.onclick = function () {
    document.getElementById('table').innerHTML =
      document.getElementById('table').innerHTML + x;
    return false;
  };
};
