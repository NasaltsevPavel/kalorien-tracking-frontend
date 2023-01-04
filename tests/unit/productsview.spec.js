import { mount } from '@vue/test-utils'
import ProductsView from '@/views/ProductsView.vue'
import ProductCreateForm from '@/components/ProductCreateForm'
import ProductDeleteForm from '@/components/ProductDeleteForm'

describe('Testing ProductsView.vue', () => {
  it('should show page title',
    () => {
      // when
      const wrapper = mount(ProductsView, { propsData: { language: 'en' } }
      )
      // then
      expect(wrapper.text()).toMatch('Welcome to Products')
    })

  it('should have product create form component', () => {
    // when
    const wrapper = mount(ProductsView)

    // then
    const createForm = wrapper.findComponent(ProductCreateForm)
    expect(createForm.exists()).toBeTruthy()
  })

  it('should have product delete form component', () => {
    // when
    const wrapper = mount(ProductsView, { propsData: { language: 'en' } })

    // then
    const deleteForm = wrapper.findComponent(ProductDeleteForm)
    expect(deleteForm.exists()).toBeTruthy()
  })
})
