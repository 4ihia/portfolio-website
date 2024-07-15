document.addEventListener('DOMContentLoaded', () => {
        const data = [
    { usuario: 'cjboyle11', prompt: 'Read on and Prosper in a whimsical, handwritten font...', likes: 17, imageSrc: 'https://cdn.leonardo.ai/users/034b7e63-fcff-44dd-b7a0-e75e6c935551/generations/84898f23-65e5-4697-8939-6f872d9b838d/Default_Read_on_and_Prosper_in_a_whimsical_handwritten_font_il_1.jpg?w=512', appUrl: 'https://app.leonardo.ai/?via=aia' },
    { usuario: 'Kingnor', prompt: 'A playfully lounging Deadpool, clad in his iconic red and black suit...', likes: 191, imageSrc: 'https://cdn.leonardo.ai/users/bd3c76b0-2179-4abe-925f-ff1010733409/generations/d75816be-795b-456d-ab1d-190b33cc27c4/variations/alchemyrefiner_alchemymagic_4_d75816be-795b-456d-ab1d-190b33cc27c4_0.jpg?w=512', appUrl: 'https://app.leonardo.ai/?via=aia' },
    { usuario: 'codenamegrey', prompt: 'A sharply skilled graphic artist has crafted a stunning logo for Code Name Grey...', likes: 69, imageSrc: 'https://cdn.leonardo.ai/users/2b9315b0-4b3a-4690-88d7-5676392553f8/generations/eb17613a-f1af-4fe5-893a-f60219f16980/variations/Default_A_sharply_skilled_graphic_artist_has_crafted_a_stunnin_1_eb17613a-f1af-4fe5-893a-f60219f16980_0.jpg?w=512', appUrl: 'https://app.leonardo.ai/?via=aia' },
    { usuario: 'TeshaRC', prompt: 'A shimmering painting of emerald green, liquid gold, and white...', likes: 32, imageSrc: 'https://cdn.leonardo.ai/users/1ada98f2-031f-46db-9db5-470d291b0012/generations/ea63f8c0-3f25-4e5c-8563-9d1d119af99b/Default_A_shimmering_painting_of_emerald_green_liquid_gold_and_2.jpg?w=512', appUrl: 'https://app.leonardo.ai/?via=aia' },
    { usuario: 'Fade83', prompt: 'A strikingly detailed pop art sticker of a skull adorned with a handlebar mustache...', likes: 109, imageSrc: 'https://cdn.leonardo.ai/users/488b2142-a553-4ad6-b85f-083376cf5333/generations/7b2604d8-a302-4a6f-b8e9-a277fb705e8a/variations/alchemyrefiner_alchemymagic_1_7b2604d8-a302-4a6f-b8e9-a277fb705e8a_0.jpg?w=512', appUrl: 'https://app.leonardo.ai/?via=aia' },
    { usuario: 'dannygriffin', prompt: 'A vibrant beach band logo set against a retro sunset background...', likes: 230, imageSrc: 'https://cdn.leonardo.ai/users/ceb6cd97-1128-41b8-a0df-f1489fe6b628/generations/e1adf293-c498-438f-bf72-2b5a73e91acb/variations/alchemyrefiner_alchemymagic_3_e1adf293-c498-438f-bf72-2b5a73e91acb_0.jpg?w=512', appUrl: 'https://app.leonardo.ai/?via=aia' },
    { usuario: 'Hametgomez', prompt: 'An exuberant 3D representation of a teenager and a teenage woman...', likes: 105, imageSrc: 'https://cdn.leonardo.ai/users/eb52d25c-a0e2-41c3-be81-b3dbb3d209ce/generations/0496cdd0-8e82-405e-94d9-f2eb303bb882/variations/Default_An_exuberant_3D_representation_of_a_teenager_strong_bo_0_0496cdd0-8e82-405e-94d9-f2eb303bb882_0.jpg?w=512', appUrl: 'https://app.leonardo.ai/?via=aia' },
    { usuario: 'BIGEye', prompt: 'fresh raspberry style ice cream，pink background，in glass cup...', likes: 169, imageSrc: 'https://cdn.leonardo.ai/users/2be56a1d-8a34-4dc0-b0f8-b95806f56164/generations/31e99a13-953f-4035-b35e-717ab8153cbe/variations/alchemyrefiner_alchemymagic_1_31e99a13-953f-4035-b35e-717ab8153cbe_0.jpg?w=512', appUrl: 'https://app.leonardo.ai/?via=aia' },
    { usuario: 'CoexistCorner', prompt: 'Ful edgy standing hand drawn portrait of WonderFae, fae with long blue and purple hair...', likes: 47, imageSrc: 'https://cdn.leonardo.ai/users/06b707fd-969f-449d-a45c-de076774f4e6/generations/25d49909-3750-49c3-81b4-8c3c1ac2db10/variations/Default_Ful_edgy_standing_hand_drawn_portrait_of_WonderFae_fae_0_25d49909-3750-49c3-81b4-8c3c1ac2db10_0.jpg?w=512', appUrl: 'https://app.leonardo.ai/?via=aia' },
    { usuario: 'willharveyjones', prompt: 'Generate a vibrant game logo in a flat cartoon style for "Arludo Science Portal"...', likes: 12, imageSrc: 'https://cdn.leonardo.ai/users/1b18f67a-195d-4110-ade0-20e0a9ff5f36/generations/0ebcce17-3b51-4b7c-8aeb-65b46afc04bb/variations/Default_Generate_a_vibrant_game_logo_in_a_flat_cartoon_style_fo_0_0ebcce17-3b51-4b7c-8aeb-65b46afc04bb_0.jpg?w=512', appUrl: 'https://app.leonardo.ai/?via=aia' }
];

 const container = document.querySelector('.container');
    const search = document.querySelector('#search');
    const popup = document.querySelector('#popup');
    const popupTitle = document.querySelector('#popup-title');
    const popupPrompt = document.querySelector('#popup-prompt');
    const closePopup = document.querySelector('#close-popup');

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img class="card-image" src="${item.imageSrc}" alt="${item.prompt}">
            <div class="card-content">
                <p class="card-user">@${item.usuario}</p>
                <p class="card-likes">❤️ ${item.likes}</p>
                <p class="card-prompt">${item.prompt}</p>
            </div>
        `;
        card.addEventListener('click', () => {
            popupTitle.textContent = `@${item.usuario}`;
            popupPrompt.textContent = item.prompt;
            popup.style.display = 'block';
        });
        container.appendChild(card);
    });

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    search.addEventListener('input', () => {
        const searchValue = search.value.toLowerCase();
        const cards = container.querySelectorAll('.card');
        cards.forEach(card => {
            const user = card.querySelector('.card-user').textContent.toLowerCase();
            if (user.includes(searchValue)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
