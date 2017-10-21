function simpleApp(service){

  this.service = service
  this.echo = (nickname)=>{
    var fristname = this.service()
    return `Hello ${fristname}!`
  }

}

test ('simple Mock',()=>{
  const mockFn = jest.fn('Proud')
  .mockReturnValue('Pawanee Sangngern')

  var app = new simpleApp(mockFn)
  var result = app.echo('Proud')

  expect(result).toBe('Hello Pawanee Sangngern!')
  expect(mockFn).toHaveBeenCalled()

})
