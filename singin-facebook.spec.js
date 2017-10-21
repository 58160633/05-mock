function simpleApp(service){
  this.service = service
  this.echo = (nickname)=>{
    var fristname = this.service(nickname)
    return `Hello ${fristname}!`
  }
}

function BuuAuthen(service) {
  this.service = service
  this.BuuAuthen = (username,password) =>{
    return this.service(username,password,'0000000000');
  }
}

test ('simple Mock',()=>{
  const mockFn = jest.fn('Proud')
  .mockReturnValue('Pawanee Sangngern')

  var app = new simpleApp(mockFn)
  var nickname = 'Proud'
  var result = app.echo(nickname)

  expect(result).toBe('Hello Pawanee Sangngern!')
  expect(mockFn).toHaveBeenCalled()
  expect(mockFn).toHaveBeenCalledWith(nickname)

})

test('signInWithFacebook should return email,id,name when input username and password', ()=>{
  const returnObject = {
    email : "Pawanee@gmail.com",
    id : "123456789",
    name : "Pawanee",
    token : "0000000000"
  }
  var username = 'pawanee'
  var password = '4869'

  const mockFn = jest.fn(username,password)
  .mockReturnValue(returnObject)

  var app = new BuuAuthen(mockFn)
  var accountInfo = app.BuuAuthen(username,password)

  expect(accountInfo.name).toBe('Pawanee')
  expect(mockFn).toHaveBeenCalled()
  expect(returnObject.token).toHaveLength(10)

})

//https goog.gl/QRgax9
