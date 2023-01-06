import { mount } from '@vue/test-utils'
import ProductCreateForm from '@/components/ProductCreateForm'
// import ProductsView from "@/views/ProductsView";

describe('Testing ProductCreateForm.vue', () => {
  it('should not show form by default', () => {
    // when
    const wrapper = mount(ProductCreateForm, { propsData: { language: 'en' } })

    // then
    expect(wrapper.find('#offcanvasRight').classes()).not.toContain('show')
  })
})
