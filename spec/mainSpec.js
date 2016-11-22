describe("function rockPaperScissors", function() {
    
  it("should exist showUser", function(){
    expect( showUser ).toBeDefined();             
  });
  it("should exist showRepos", function(){
    expect( showRepos ).toBeDefined();             
  });
  it("should exist getUser", function(){
    expect( getUser ).toBeDefined();             
  });
  it("should exist getRepos", function(){
    expect( getRepos ).toBeDefined();             
  });
  it("getUser should return a promise", function(){
    expect( getUser() instanceof Promise ).toBe(true);
  });
  it("getRepos should return a promise", function(){
    expect( getRepos() instanceof Promise ).toBe(true);
  });
  it("should show error", function(){
    var errorHtml = '<p class="error">Does not exist</p>';
    expect( generateHtmlError( 'Does not exist' )).toBe(errorHtml);
  });

});