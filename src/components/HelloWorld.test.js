import {
    shallowMount
} from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld.vue', () => {
    test('renders props.msg when passed', () => {
        const msg = 'new message'
        const wrapper = shallowMount(HelloWorld, {
            propsData: {
                msg
            }
        })
        expect(wrapper.text()).toMatch(msg)
    })
})

test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
});