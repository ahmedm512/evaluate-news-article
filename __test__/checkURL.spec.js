import checkUrl from '../src/client/js/checkURL';

describe('Test checkUrl Function', ()=>{
    const validUrl = 'https://www.msn.com/en-us/money/other/emergent-cited-by-panel-for-failing-to-fix-vaccine-faults/ar-BB1gUvvg?ocid=entnewsntp';
    const invalidUrl = 'ahmedmohamed';
    test('Returns true if url match RegEx', () => {
        const res = checkUrl(validUrl);
        expect(res).toBe(true);
        expect(res).toBeDefined();
    });
    test('Returns false if url does not match RegEx', () => {
        const res = checkUrl(invalidUrl);
        expect(res).toBe(false);
        
    });
});