import { render } from 'tests/utils';
import { SRow, SCol } from './Grid.styles';

describe('SRow', () => {
    it('applies default styles correctly', () => {
        const { container } = render(<SRow />);
        expect(container.firstChild).toHaveStyleRule('display', 'flex');
        expect(container.firstChild).toHaveStyleRule('flex-wrap', 'wrap');
    });

    it('applies gutter styles correctly', () => {
        const { container } = render(<SRow $gutter={[16, 12]} />);
        expect(container.firstChild).toHaveStyleRule('margin-left', '-8px');
        expect(container.firstChild).toHaveStyleRule('margin-right', '-8px');
        expect(container.firstChild).toHaveStyleRule('margin-top', '-6px');
        expect(container.firstChild).toHaveStyleRule('margin-bottom', '-6px');
    });

    it('applies align and justify styles correctly', () => {
        const { container } = render(<SRow $align="middle" $justify="center" />);
        expect(container.firstChild).toHaveStyleRule('align-items', 'center');
        expect(container.firstChild).toHaveStyleRule('justify-content', 'center');
    });

    it('applies nowrap style correctly', () => {
        const { container } = render(<SRow $wrap={false} />);
        expect(container.firstChild).toHaveStyleRule('flex-wrap', 'nowrap');
    });
});

describe('SCol', () => {
    it('applies default styles correctly', () => {
        const { container } = render(<SCol />);
        expect(container.firstChild).toHaveStyleRule('display', 'block');
        expect(container.firstChild).toHaveStyleRule('flex', 'none');
    });

    it('applies span styles correctly', () => {
        const { container } = render(<SCol $span={12} />);
        expect(container.firstChild).toHaveStyleRule('width', '50%');
    });

    it('applies offset styles correctly', () => {
        const { container } = render(<SCol $offset={6} />);
        expect(container.firstChild).toHaveStyleRule('margin-left', '25%');
    });

    // it('applies responsive styles correctly', () => {
    //     const { container } = render(<SCol $xs={24} $sm={12} $md={8} $lg={6} $xl={4} $xxl={2} />);
    //     expect(container.firstChild).toHaveStyleRule('width', '100%', {
    //         media: '(min-width: 480px)',
    //     });
    //     expect(container.firstChild).toHaveStyleRule('width', '50%', {
    //         media: '(min-width: 576px)',
    //     });
    //     expect(container.firstChild).toHaveStyleRule('width', '33.3333%', {
    //         media: '(min-width: 768px)',
    //     });
    //     expect(container.firstChild).toHaveStyleRule('width', '25%', {
    //         media: '(min-width: 992px)',
    //     });
    //     expect(container.firstChild).toHaveStyleRule('width', '16.6667%', {
    //         media: '(min-width: 1200px)',
    //     });
    //     expect(container.firstChild).toHaveStyleRule('width', '8.3333%', {
    //         media: '(min-width: 1400px)',
    //     });
    // });
});
