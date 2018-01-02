import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld/index.vue'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#msg').textContent)
    .toEqual('Welcome to this bug demonstration!')
  })
})
