import { mount } from '@vue/test-utils'
import CardUpdateForm from '@/components/CardUpdateForm'

describe('Testing CardUpdateForm.vue', () => {
  it('should not show form by default', () => {
    // when
    const wrapper = mount(CardUpdateForm, { propsData: { language: 'en' } })

    // then
    expect(wrapper.find('#offcanvasRight1').classes()).not.toContain('show')
  })
})
