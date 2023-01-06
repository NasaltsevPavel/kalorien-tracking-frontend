import { mount } from '@vue/test-utils'
import DaysView from '@/views/DaysView.vue'
import DayCreateForm from '@/components/DayCreateForm'
import DayDeleteForm from '@/components/DayDeleteForm'

describe('Testing DaysView.vue', () => {
  it('should have day create form component', () => {
    // when
    const wrapper = mount(DaysView)

    // then
    const createForm = wrapper.findComponent(DayCreateForm)
    expect(createForm.exists()).toBeTruthy()
  })

  it('should have day delete form component', () => {
    // when
    const wrapper = mount(DaysView, { propsData: { language: 'en' } })

    // then
    const deleteForm = wrapper.findComponent(DayDeleteForm)
    expect(deleteForm.exists()).toBeTruthy()
  })
})
