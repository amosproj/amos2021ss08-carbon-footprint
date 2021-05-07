import logo from 'assets/logo/LogoCarbonteam.png'
import logo_1 from 'assets/dummyImages/Image_1.PNG'
import logo_2 from 'assets/dummyImages/Image_2.PNG'

export function getModels() {
    return (  [
                            {
                                key:`option-1#`,
                                label: 'Transformer 3-phase GSU',
                                onClick: () => console.log('Transformer 3-phase GSU')
                            },
                            {
                                key:`option-2#`,
                                label: 'Transformer 3-phase GSU #2',
                                onClick: () => console.log('Transformer 3-phase GSU')
                            },
                            {
                                key:`option-3#`,
                                label: 'Transformer 3-phase GSU #3',
                                onClick: () => console.log('Transformer 3-phase GSU')
                            },
 
                        ]);
}

export function getProducts() {
    return ([logo,logo_1,logo_2,logo_1,logo_2,logo_1]);
}

