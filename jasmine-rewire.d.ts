declare module 'jasmine-rewire' {
	export default function rewire<T>(object: Object, mocks: T): T;
}
