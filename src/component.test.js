
import { shallowMount } from '@vue/test-utils';
import CardList from './components/CardList'; // name of your Vue component

let wrapper;

beforeEach(() => {
    wrapper = shallowMount(CardList, {
        propsData: {},
        mocks: {},
        stubs: {},
        methods: {},
    });
});

afterEach(() => {
    wrapper.destroy();
});

describe('CardList', () => {
    test('is a Vue instance', () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });
});