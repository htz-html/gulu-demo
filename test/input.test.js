const expect = chai.expect;
 import Vue from 'vue'
 import Input from '../src/input.vue'

 Vue.config.productionTip = false
 Vue.config.devtools = false

describe('Input', () => {
  it('存在.', ()=>{
    expect(Input).to.be.ok
  })
  
  describe('props', () =>{
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(()=>{
      vm.$destroy()
    })

    it('接收 value', () => {
      vm = new Constructor({
        propsData:{
          value: '1234'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('1234')
    })

    it('接收 disabled', () => {
      vm = new Constructor({
        propsData:{
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })

    it('接收 readonly', () => {
      vm = new Constructor({
        propsData:{
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      console.log(inputElement.outerHTML)
      expect(inputElement.readOnly).to.equal(true)
    })

    it('接收 error', () => {
      vm = new Constructor({
        propsData:{
          error: '你错了'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
      const errorMessage = vm.$el.querySelector('.errorMessage')
      expect(errorMessage.innerText).to.equal('你错了')
    })
  })
  describe('事件',() => {
    const Constructor = Vue.extend(Input)
    let vm
    let callback
    beforeEach(()=>{
      vm= new Constructor({}).$mount()
      callback = sinon.fake();
    })
    afterEach(()=>{
      vm.$destroy()
    })

    it('支持 change/input/focus/blur 事件', () => {
      ['change', 'input', 'focus', 'blur']
        .forEach((eventName)=>{
        vm.$on(eventName, callback)
        let event = new Event(eventName);
        // 开始使用这个不行，才用的下面Object.defineProperty
        // event.target = {
        //   value: 'hi'
        // }
        Object.defineProperty(
          event, 'target', {
            value: { value: 'hi'}, enumerable:true
          }
        )
        let inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith('hi')
      })
    })

    // it('支持 input 事件', () => {
    //   vm.$on('input', callback) 
    //   let event = new Event('input');
    //   let inputElement = vm.$el.querySelector('input')
    //   inputElement.dispatchEvent(event)
    //   expect(callback).to.have.been.calledWith(event)
    // })

    // it('支持 focus 事件', () => {
    //   vm.$on('focus', callback)
    //   let event = new Event('focus');
    //   let inputElement = vm.$el.querySelector('input')
    //   inputElement.dispatchEvent(event)
    //   expect(callback).to.have.been.calledWith(event)
    // })

    // it('支持 blur 事件', () => {
    //   vm.$on('blur', callback)
    //   let event = new Event('blur');
    //   let inputElement = vm.$el.querySelector('input')
    //   inputElement.dispatchEvent(event)
    //   expect(callback).to.have.been.calledWith(event)
    // })
  })
})