

export interface Command {
    name: string;
    action: RibbonButtonAction;
}

export interface TabDetails {
    name: string;
    tools: Command[];
}

type RibbonButtonAction = string | (() => void);

type RibbonCommand = {
    name: string;
    action: RibbonButtonAction;
};

type RibbonProps = {
    name: string;
    action: RibbonButtonAction;
};

export const ribbonTabs: TabDetails[] = [
    {
        name: 'ホーム',
        tools: [
            { name: 'ドローイングツール', action: () => console.log('Drawing tool used') },
            { name: '編集ツール', action: () => console.log('Edit tool used') },
            { name: '注釈ツール', action: () => console.log('Annotation tool used') },
            { name: 'レイヤー管理', action: () => console.log('Layer management used') },
            { name: 'プロパティ', action: () => console.log('Property used') },
            { name: 'グループ', action: () => console.log('Group used') },
            { name: 'ブロック', action: () => console.log('Block used') },
            { name: 'その他のユーティリティ', action: () => console.log('Other utilities used') },
        ]
    },
    {
        name: '挿入',
        tools: [
            { name: 'ブロック', action: () => console.log('Block used') },
            { name: '参照', action: () => console.log('Reference used') },
            { name: '画像', action: () => console.log('Image used') },
            { name: 'テキスト', action: () => console.log('Text used') },
            { name: 'その他のオブジェクト', action: () => console.log('Other objects used') },
        ]
    },
    {
        name: '注釈',
        tools: [
            { name: 'テキスト', action: () => console.log('Text used') },
            { name: '寸法', action: () => console.log('Dimension used') },
            { name: 'ハッチ', action: () => console.log('Hatch used') },
            { name: 'テーブル', action: () => console.log('Table used') },
            { name: 'リーダー', action: () => console.log('Leader used') },
            { name: 'その他の注釈ツール', action: () => console.log('Other annotation tools used') },
        ]
    },
    {
        name: '表示',
        tools: [
            { name: 'ビューポート', action: () => console.log('Viewport used') },
            { name: 'ビジュアルスタイル', action: () => console.log('Visual style used') },
            { name: 'ナビゲーション', action: () => console.log('Navigation used') },
            { name: '3Dビュー', action: () => console.log('3D view used') },
            { name: 'カメラ', action: () => console.log('Camera used') },
            { name: 'その他の表示ツール', action: () => console.log('Other display tools used') },
        ]
    },
    {
        name: '出力',
        tools: [
            { name: 'プロット', action: () => console.log('Plot used') },
            { name: 'エクスポート', action: () => console.log('Export used') },
            { name: '出版', action: () => console.log('Publish used') },
            { name: 'プリント', action: () => console.log('Print used') },
        ]
    },
    {
        name: 'パラメトリック',
        tools: [
            { name: '制約', action: () => console.log('Constraint used') },
            { name: 'アクション', action: () => console.log('Action used') },
            { name: 'パラメータ', action: () => console.log('Parameter used') },
        ]
    },

    {
        name: '3Dツール',
        tools: [
            { name: 'メッシュモデリング', action: () => console.log('Mesh modeling used') },
            { name: 'ソリッドモデリング', action: () => console.log('Solid modeling used') },
            { name: 'サーフェスモデリング', action: () => console.log('Surface modeling used') },
        ]
    },
    {
        name: 'レンダリング',
        tools: [
            { name: 'マテリアル設定', action: () => console.log('Material settings used') },
            { name: 'ライティング', action: () => console.log('Lighting used') },
            { name: 'レンダリング設定', action: () => console.log('Rendering settings used') },
            { name: 'レンダリング開始', action: () => console.log('Rendering started') },
        ]
    },
    {
        name: 'カスタマイズ',
        tools: [
            { name: 'ユーザーインターフェース設定', action: () => console.log('User interface settings used') },
            { name: 'ショートカットキー設定', action: () => console.log('Shortcut key settings used') },
            { name: 'ツールセット管理', action: () => console.log('Toolset management used') },
        ]
    },
    {
        name: 'マクロ',
        tools: [
            { name: 'マクロの作成', action: () => console.log('Macro creation used') },
            { name: 'マクロの実行', action: () => console.log('Macro execution used') },
            { name: 'マクロエディタ', action: () => console.log('Macro editor used') },
        ]
    },
    {
        name: 'その他',
        tools: [
            { name: 'プラグイン管理', action: () => console.log('Plugin management used') },
            { name: 'テンプレート管理', action: () => console.log('Template management used') },
            { name: 'ライセンス情報', action: () => console.log('License information used') },
        ]
    },
];
