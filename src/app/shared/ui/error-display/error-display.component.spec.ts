import { render } from '@testing-library/angular';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { ErrorDisplayComponent } from './error-display.component';
describe('ErrorDisplayComponent', () => {
  it('shows required message', async () => {
    const control = new FormControl('', Validators.required);
    const { getByText } = await render(ErrorDisplayComponent, { imports: [ReactiveFormsModule], componentProperties: { control } });
    expect(getByText('यह फ़ील्ड आवश्यक है')).toBeTruthy();
  });
});
